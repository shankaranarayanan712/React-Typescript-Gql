import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './Router';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { client } from './_helpers/apollo';
import './components/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
