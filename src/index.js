import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  clientState: {
    defaults: { 
      user: {
        __typename: 'User',
        name: 'Commander Fitis'
      },
      resources: [
        {__typename: 'Resource', name: 'metal', quantity: 17994706, level: 30, vault: 12},
        {__typename: 'Resource', name: 'crystal', quantity: 854246, level: 28, vault: 11},
        {__typename: 'Resource', name: 'deuterium', quantity: 133854, level: 17, vault: 11},
        {__typename: 'Resource', name: 'energy', quantity: 474, level: 30, vault: 0}
      ]
    },
    // resolvers: {
    //   Query: {
    //     resources: (_, data, {cache}) => {
    //       console.log(data);
    //     }
    //   }
    // },
    typeDefs: `
      type User {
        name: String
      }

      type Resource {
        name: String
        quantity: Float
        production: Production
        level: Int
        vault: Int
      }
    `
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
