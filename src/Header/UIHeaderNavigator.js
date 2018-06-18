import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Tooltip} from 'react-tippy';

import Resource from './Resource';
import UIResourceValue from './UIResourceValue';

class UIHeaderNavigator extends Component {
  render() {
    const {resources, user} = this.props;

    return (
      <div id="info" className="header water">
          <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=overview">
            <img src="assets/pixel.gif" id="logoLink"/>
          </a>
          <div id="star"></div>
          <div id="star1"></div>
          <div id="star2"></div>
          <div id="clearAdvice"></div>
          <div id="bar">
            <ul>
              <li id="playerName">
                玩家:
                <span className="textBeefy">
                  <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=changenick" className="overlay textBeefy" data-overlay-title="" data-overlay-popup-width="400" data-overlay-popup-height="200">{user.name}</a>
                </span>
              </li>
              <li>
                <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=highscore">排行榜</a>
                (172)                </li>
                <li>
                  <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=notices" className="overlay" data-overlay-title="私人筆記" data-overlay-classname="notices" data-overlay-popup-width="750" data-overlay-popup-height="480">
                    筆記</a>
                  </li>
                  <li>
                    <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=buddies">
                      好友名單</a>
                    </li>
                    <li><a className="overlay" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=search&amp;ajax=1" data-overlay-title="蒐索宇宙" data-overlay-close="__default closeSearch" data-overlay-classname="search">搜尋</a>
                    </li>
                    <li><a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=preferences">選項</a></li>
                    <li><a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=support" target="_blank">客服援助系統</a></li>
                    <li><a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=logout">登出</a></li>
                    <li className="OGameClock">16.06.2018 <span>09:42:34</span></li>
                  </ul>
                  
                </div>
                <ul id="resources">
                  {resources.map((resource, key) => {

                    return (
                    <li key={key} id={resource.name + '_box'} className={resource.name + ' tooltipHTML'}>
                      <Tooltip
                        animtion={'none'}
                        duration={0}
                        transitionFlip={false}
                        html={(
                          <div className="t_Tooltip t_Tooltip_cloud" style={{display: 'block', width: '134px', height: '110px', left: '150px', borderRadius: '5px'}}>
                            <div className="t_Content" style={{left: '3px', top: '11px', background: 'linear-gradient(to bottom, #121b23, black)', border: '1px solid #415866', borderRadius: '5px'}}>
                              <div className="t_ContentContainer t_clearfix t_Content_cloud" style={{width: 'auto', height: 'auto'}}>
                                <div className="htmlTooltip">
                                  <h1>晶體</h1>
                                  <div className="splitLine"></div>
                                  <table className="resourceTooltip">
                                    <tbody>
                                      <tr>
                                          <th>現有量:</th>
                                          <td><UIResourceValue resource={resource} value={resource.quantity.toLocaleString()} /></td>
                                      </tr>
                                      <tr>
                                          <th>儲存容量:</th>
                                          <td><UIResourceValue resource={resource} value={resource.storageCapacity.toLocaleString()} /></td>
                                      </tr>
                                      <tr>
                                          <th>當前產量:</th>
                                          <td><UIResourceValue resource={resource} value={resource.productionRate.toLocaleString()} increment={true} /></td>
                                      </tr>
                                      {resource.name !== 'energy' && <tr>
                                          <th>保護倉容量:</th>
                                          <td><span className="middlemark">{resource.protectedStorageCapacity.toLocaleString()}</span></td>
                                      </tr>}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        distance={5}
                        interactive={true}
                      >
                        <div className={'resourceIcon ' + resource.name}></div>
                        <span className="value">
                          <UIResourceValue resource={resource} value={resource.quantity.toLocaleString()} />
                        </span>
                      </Tooltip>
                    </li>
                    );
                  })}
                  <li id="darkmatter_box" className="darkmatter dark_highlight_tablet tooltipHTML" title="" data-tooltip-button="購買暗物質">
                    <a className="overlay" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=payment">
                      <img src="assets/401d1a91ff40dc7c8acfa4377d3d65.gif"/>
                      <span className="value">
                        <span id="resources_darkmatter">8,000</span>
                      </span>
                    </a>
                  </li>
                </ul>
                
                <div id="message-wrapper">
                  <a className=" comm_menu messages tooltip js_hideTipOnMobile" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=messages" title="0 封未讀訊息">
                    <span className="new_msg_count totalMessages noMessage news" data-new-messages="0">
                      0                </span>
                    </a>
                    <a className=" comm_menu chat tooltip js_hideTipOnMobile" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=chat" title="">
                      <span className="new_msg_count totalChatMessages noMessage" data-new-messages="0">
                        0                </span>
                      </a>
                      <div id="messages_collapsed">
                        <div id="eventboxFilled" className="eventToggle" style={{display: 'none'}}>
                          <a id="js_eventDetailsClosed" className="tooltipRight js_hideTipOnMobile" href="#" title="更多細節"></a>
                          <a id="js_eventDetailsOpen" className="tooltipRight open js_hideTipOnMobile" href="#" title="精簡細節"></a>
                          
                          
                        </div>
                        <div id="eventboxLoading" className="textCenter textBeefy" style={{display: 'none'}}>
                          <img src="assets/3f9884806436537bdec305aa26fc60.gif" width="16" height="16"/>載入中...</div>
                          <div id="eventboxBlank" className="textCenter">
                            沒有艦隊活動</div>            </div>
                            <div id="attack_alert" className="tooltip eventToggle noAttack" title="">
                              <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=eventList"></a>
                            </div>
                            <br className="clearfloat"/>
                          </div>
                          
                          <div id="helper">
                            <a className="highlight tooltip tooltipClose" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=tutorial&amp;displayNew=1" title="教學總覽&lt;br/&gt;&lt;a href='https://s124-tw.ogame.gameforge.com/game/index.php?page=rewards'&gt;&lt;/a&gt;">?</a>
                            
                          </div>
                          
                          <div id="selectedPlanetName" className="textCenter">母星</div>
                        </div>
    );
  }
}

export default graphql(gql`
  query {
    resources @client {
      name
      quantity
      level
      vault
    }

    user @client {
      name
    }
  }
`, {
  props: ({data: {resources, user}}) => ({
    resources: resources.map((resource) => new Resource(resource)),
    user
  })
})(UIHeaderNavigator);
