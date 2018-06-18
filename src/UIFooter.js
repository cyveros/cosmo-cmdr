import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import {graphql} from 'react-apollo';

class UIFooter extends Component {
  render() {
    return (
      <div id="siteFooter">
        <div class="content" style={{fontSize: '10px'}}>
          <div class="fleft textLeft">
            <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=standalone&amp;component=changelog&amp;ajax=1" class="tooltip js_hideTipOnMobile overlay" data-class="noXScrollbar" data-overlay-iframe="true" data-iframe-width="680" data-overlay-title="版本更新紀錄">
              6.7.0-pl2                                            </a>
              <a class="homeLink" href="http://www.gameforge.com/" rel="noopener noreferrer" target="_blank">© 2002 Gameforge 4D GmbH. 保有所有權利.</a>
            </div>
            <div class="fright textRight">
              <a href="http://wiki.ogame.org/" rel="noopener noreferrer" target="_blank">說明</a>|
              <a href="https://board.tw.ogame.gameforge.com/" rel="noopener noreferrer" target="_blank">官方論壇</a>|
              <a class="overlay" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=standalone&amp;component=rules&amp;ajax=1" data-overlay-iframe="true" data-iframe-width="450" data-overlay-title="遊戲規則">遊戲規則</a>|
              <a href="https://agbserver.gameforge.com/rewrite.php?locale=tw&amp;type=imprint&amp;product=ogame" rel="noopener noreferrer" target="_blank">版權說明</a>
            </div>
          </div>
        </div>
    );
  }
}

export default UIFooter;
