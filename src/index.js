// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import ReactGA from 'react-ga';

import store from './store/store';
import theme from './utils/theme';

ReactGA.initialize('UA-66076187-9');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
