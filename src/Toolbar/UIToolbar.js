import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import {graphql} from 'react-apollo';

class UIToolbar extends Component {
  render() {
    return (
      <div id="toolbarcomponent"><div id="links">
            <ul id="menuTable" class="leftmenu">
              
              <li>
                <span class="menu_icon">
                  <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=rewards" class="tooltipRight js_hideTipOnMobile " target="_self" title="">
                    <div class="menuImage overview overview_claimable">
                  </div>
                </a>
              </span>
              <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=overview" target="_self">
                <span class="textlabel">概覽</span>
              </a>
            </li>
            
            <li>
              <span class="menu_icon">
                <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=resourceSettings" class="tooltipRight js_hideTipOnMobile " target="_self" title="資源設定">
                  <div class="menuImage resources highlighted">
                </div>
              </a>
            </span>
            <a class="menubutton  selected" href="https://s124-tw.ogame.gameforge.com/game/index.php?page=resources" target="_self">
              <span class="textlabel">資源</span>
            </a>
          </li>
          
          <li>
            <span class="menu_icon">
              <div class="menuImage station"></div>
            </span>
            <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=station" target="_self">
              <span class="textlabel">設施</span>
            </a>
          </li>
          
          
          
          <li>
            <span class="menu_icon">
              <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=techtree&amp;tab=3&amp;open=all" class="overlay tooltipRight js_hideTipOnMobile " rel="noopener noreferrer" target="_blank" title="科技">
                <div class="menuImage research">
              </div>
            </a>
          </span>
          <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=research" target="_self">
            <span class="textlabel">科技</span>
          </a>
        </li>
        
        <li>
          <span class="menu_icon">
            <div class="menuImage shipyard"></div>
          </span>
          <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=shipyard" target="_self">
            <span class="textlabel">造船廠</span>
          </a>
        </li>
        
        <li>
          <span class="menu_icon">
            <div class="menuImage defense"></div>
          </span>
          <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=defense" target="_self">
            <span class="textlabel">防禦</span>
          </a>
        </li>
        
        <li>
          <span class="menu_icon">
            <a href="https://s124-tw.ogame.gameforge.com/game/index.php?page=movement" class="tooltipRight js_hideTipOnMobile " target="_self" title="艦隊動向">
              <div class="menuImage fleet1">
            </div>
          </a>
        </span>
        <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=fleet1" target="_self">
          <span class="textlabel">艦隊</span>
        </a>
      </li>
      
      <li>
        <span class="menu_icon">
          <div class="menuImage galaxy"></div>
        </span>
        <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=galaxy" target="_self">
          <span class="textlabel">銀河系</span>
        </a>
      </li>
      
      <li>
        <span class="menu_icon">
          <div class="menuImage alliance"></div>
        </span>
        <a class="menubutton " href="https://s124-tw.ogame.gameforge.com/game/index.php?page=alliance" target="_self">
          <span class="textlabel">聯盟</span>
        </a>
      </li>
    </ul>
    
    <div class="adviceWrapper">
      <div id="advicebarcomponent" class="advicebar injectedComponent parent toolbar"><div class="adviceWrapper">
        
        <div id="advice-bar">
          
          
          
          
          
        </div>
        
      </div>
      
    </div>
  </div>
  <div id="toolLinksWrapper">
    <ul id="menuTableTools" class="leftmenu"></ul>
  </div>
  <br class="clearfloat"/>
</div>
</div>
    );
  }  
}

export default UIToolbar;
