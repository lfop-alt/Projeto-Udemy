import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default function reducersPersisted(reducers) {
  const persistedReducer = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducer;
}
