import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {Provider } from 'react-redux';
import rootreducer from "./redux/service/reducers/indexrr"
import { createStore } from 'redux';
const store = createStore(rootreducer)
console.log( "stre data is " , store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     
        {/* <BrowserRouter>
            <App></App>
        </BrowserRouter> */}

        
        <Provider store={store}>
          <App/>
        </Provider>
        
    </>
);