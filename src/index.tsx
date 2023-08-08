import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import rootReducer from './services/store';
import { Provider } from 'react-redux';
//import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from "react-router-dom";
import store from './services/store';
import { compose } from 'redux';


// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const thunkEnhancer = applyMiddleware(thunk);
// const enhancer = composeEnhancers(thunkEnhancer);


// const store = createStore(rootReducer, enhancer); 




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    

<React.StrictMode>

    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
