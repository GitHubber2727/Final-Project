import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import { fetchVideos } from './actions';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);

store.dispatch(fetchVideos());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
