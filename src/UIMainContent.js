import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class UIMainContent extends Component {
  render() {
    return (
      <div id="contentWrapper" class="with_chat_bar">
  <div id="eventboxContent" style={{display: 'none'}}>
    <img src="assets/3f9884806436537bdec305aa26fc60.gif" width="16" height="16"/>
  </div>
  
  <div id="inhalt">
    <div id="planet" style={{backgroundImage:"url('assets/header/resouce/water/water_1_2_3_4.jpg')"}}>
      <div id="header_text">
        
        
        <h2>資源 - 母星</h2>
        
        
      </div>
      <div id="slot01" class="slot">
        <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=resourceSettings">
          資源設定            </a>
        </div>
        
        <form method="POST" action="https://s124-tw.ogame.gameforge.com/game/index.php?page=resources&amp;deprecated=1" name="form" onkeyup="sendBuildRequest(null, event, false);" onsubmit="return false;">
          <input name="token" value="f78acf632377ecb0c9941582bb34d156" type="hidden"/>	        <div id="detail" class="detail_screen">
            <div id="techDetailLoading"></div>
          </div>
        </form>
        
      </div>
      <div class="c-left"></div>
      <div class="c-right"></div>
      
      
      
      
      <div id="buttonz">
        <div class="header"> 
          <h2>
            資源建築	</h2>
          </div>
          <div class="content"> 
            <ul id="building">
              
              <li id="button1" class="disabled">
                <div class="supply1">
                  <div class="buildingimg">
                    <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="金屬礦&lt;br/&gt;建造排程已滿" ref="1" id="details" href="#">
                      <span class="ecke">
                        <span class="level">
                          <span class="textlabel">
                            金屬礦 
                          </span>
                          21	                           </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
                
                <li id="button2" class="disabled">
                  <div class="supply2">
                    <div class="buildingimg">
                      <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="晶體礦&lt;br/&gt;建造排程已滿" ref="2" id="details" href="#">
                        <span class="ecke">
                          <span class="level">
                            <span class="textlabel">
                              晶體礦 
                            </span>
                            19	                           </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  
                  <li id="button3" class="disabled">
                    <div class="supply3">
                      <div class="buildingimg">
                        <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="重氫合成器&lt;br/&gt;建造排程已滿" ref="3" id="details" href="#">
                          <span class="ecke">
                            <span class="level">
                              <span class="textlabel">
                                重氫合成器 
                              </span>
                              10	                           </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    
                    <li id="button4" class="disabled">
                      <div class="supply4">
                        <div class="buildingimg">
                          <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="太陽能發電廠&lt;br/&gt;建造排程已滿" ref="4" id="details" href="#">
                            <span class="ecke">
                              <span class="level">
                                <span class="textlabel">
                                  太陽能發電廠 
                                </span>
                                22	                           </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      
                      <li id="button5" class="disabled">
                        <div class="supply12">
                          <div class="buildingimg">
                            <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="核融合反應器&lt;br/&gt;建造排程已滿" ref="12" id="details" href="#">
                              <span class="ecke">
                                <span class="level">
                                  <span class="textlabel">
                                    核融合反應器 
                                  </span>
                                  4	                           </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </li>
                        
                        <li id="button6" class="on">
                          <div class="supply212">
                            <div class="buildingimg">
                              <a class="detail_button tooltip js_hideTipOnMobile slideIn" title="太陽能衛星 (0)" ref="212" id="details" href="#">
                                <span class="ecke">
                                  <span class="level">
                                    <span class="textlabel">
                                      太陽能衛星 
                                    </span>
                                    0	                           </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        
                        <ul id="storage">
                          <li id="button7" class="on">
                            <div class="item_box supply22 tooltip js_hideTipOnMobile" title="金屬儲存器">
                              <div class="stationlarge buildingimg">
                                
                                <div class="construction">
                                  <div class="pusher" id="b_supply22" style={{height: '78px', marginTop: '2px'}}>
                                  </div>
                                  <a class="slideIn timeLink" href="#" ref="22">
                                    <span class="time" id="test" name="zeit">45分 14秒</span>
                                  </a>
                                  
                                  <a class="detail_button slideIn" id="details22" ref="22" href="#">
                                    <span class="eckeoben">
                                      <span style={{fontSize: '11px'}} class="undermark">8</span>
                                    </span>
                                    <span class="ecke">
                                      <span class="level">7                                            </span>
                                    </span>
                                  </a>
                                </div>  		
                              </div> 
                            </div>      
                            
                          </li>
                          <li id="button8" class="disabled">
                            <div class="supply23">
                              <div class="buildingimg">
                                <a class="tooltip js_hideTipOnMobile slideIn" href="#" title="晶體儲存器&lt;br/&gt;建造排程已滿" ref="23" id="details">
                                  <span class="ecke">
                                    <span class="level">
                                      <span class="textlabel">
                                        晶體儲存器	                               </span>
                                        7	                           </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li id="button9" class="disabled">
                                <div class="supply24">
                                  <div class="buildingimg">
                                    <a class="tooltip js_hideTipOnMobile slideIn" href="#" title="重氫儲存槽&lt;br/&gt;建造排程已滿" ref="24" id="details">
                                      <span class="ecke">
                                        <span class="level">
                                          <span class="textlabel">
                                            重氫儲存槽	                               </span>
                                            4	                           </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div class="footer"></div>
                                <br class="clearfloat"/>
                              </div>  
                            </div>
                            
                            <div class="content-box-s">
                              <div class="header">
                                <h3>建築物</h3>
                              </div>
                              <div class="content">
                                <table class="construction active" cellspacing="0" cellpadding="0">
                                  <tbody><tr>
                                    <th colspan="2">金屬儲存器</th>
                                  </tr>
                                  <tr class="data">
                                    <td class="first" rowspan="3">
                                      <div>
                                        <a href="#" class="tooltip js_hideTipOnMobile" style={{display: 'none'}} onclick='cancelProduction(22,197771,"\u53d6\u6d88 \u91d1\u5c6c\u5132\u5b58\u5668 \u5347\u7d1a\u81f3 8 \u7d1a\u55ce?"); return false;' title="取消 金屬儲存器 升級至 8 級嗎?">
                                          <img class="queuePic" src="assets/9e07148b94f6da74f9cd8e35f3bc97.jpg" alt="金屬儲存器" width="40" height="40"/>
                                        </a>
                                        <a href="#" class="tooltip abortNow js_hideTipOnMobile" onclick='cancelProduction(22,197771,"\u53d6\u6d88 \u91d1\u5c6c\u5132\u5b58\u5668 \u5347\u7d1a\u81f3 8 \u7d1a\u55ce?"); return false;' title="取消 金屬儲存器 升級至 8 級嗎?">
                                          <img src="assets/3e567d6f16d040326c7a0ea29a4f41.gif" width="15" height="15"/>
                                        </a>
                                      </div>
                                    </td>
                                    <td class="desc ausbau">升級至						<span class="level">等級 8</span>
                                    </td>
                                  </tr>
                                  <tr class="data">
                                    <td class="desc">為期:</td>
                                  </tr>
                                  <tr class="data">
                                    <td class="desc timer">
                                      <span id="Countdown">45分 14秒</span>
                                    </td>
                                  </tr>
                                  <tr class="data">
                                    <td colspan="2">
                                      <a class="build-faster dark_highlight tooltipLeft js_hideTipOnMobile building " title="減少總建築時間 (23分 16秒) 的50%" href="#" rel="https://s124-tw.ogame.gameforge.com/game/index.php?page=inventory&amp;buyAndActivate=cb4fd53e61feced0d52cfc4c1ce383bad9c05f67">
                                        <div class="build-faster-img" alt="時間減半"></div>
                                        <span class="build-txt">時間減半</span>
                                        <span class="dm_cost ">
                                          費用: 1,500 暗物質                            </span>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </div>
                                <div class="footer"></div>
                              </div>
                              
                            </div>
                          </div>
    );
  }
}

export default UIMainContent;
