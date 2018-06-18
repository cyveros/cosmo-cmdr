import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import UIHeaderNavigator from './Header/UIHeaderNavigator';
import UIToolbar from './Toolbar/UIToolbar';
import UITabNavigator from './Toolbar/UITabNavigator';
import UIMainContent from './UIMainContent';
import UIFooter from './UIFooter';


class App extends Component {
  render() {
    const {user} = this.props;

    return [
      <div className="contentBoxBody">
        <div id="boxBG">
          <div id="box">
            <UIHeaderNavigator/>
            <UIToolbar/>
            <UIMainContent/>
            <UITabNavigator/>
          </div>
        </div>
      </div>,
      <UIFooter/>
    ];
  }
}

export default graphql(gql`
  query {
    user @client {
      name
    }
  }
`, {
  props: ({data: {user}}) => ({
    user
  })
})(App);
