import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from '../reducers/todosReducer';

const persistConfig = {
  key: 'root-todo',
  storage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
