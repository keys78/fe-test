import { configureStore, combineReducers } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from '../services/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const authPersistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['todos'],
};

export const store = configureStore({
  reducer: persistReducer(authPersistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/REHYDRATE', 'persist/PERSIST'],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store, {}, () => {
  persistor.persist();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
