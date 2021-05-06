import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { createNewUser, login, logOut } from './actions/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  // const store = createStore();

  window.store = store;
  window.createNewUser = createNewUser;
  window.login = login;
  window.logOut = logOut;

  ReactDOM.render(<Root store={store} />, root);
})