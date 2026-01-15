import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*

Logical Summary of the Code

This file is the entry point of a React application.

It initializes React and renders the app into the browser.

Sets up Redux for global state management.

Enables client-side routing using React Router.

Configures snackbar notifications globally using Notistack.

Wraps everything in StrictMode for better debugging and code quality.

*/