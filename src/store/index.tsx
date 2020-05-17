import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persisConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser'],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persistor = persistStore(store);

export { store, persistor };
