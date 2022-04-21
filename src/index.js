import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
/* import ButtonWithClass from './component/ButtonWithClass'; */
import ButtonWithHook from './component/ButtonWithHook';
/* import ButtonWithHook2 from './component/ButtonWithHook2'; */
import Header from './component/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header to="This is the end of the header"/>
    {/* <ButtonWithClass /> */}
    <ButtonWithHook />
    {/* <ButtonWithHook2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();