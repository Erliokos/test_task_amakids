import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

ReactDOM.render(
  <>
  
    <Global/>
    <Provider store={store}>
    <App />
    </Provider>
  </>,
  document.getElementById('root')
);


