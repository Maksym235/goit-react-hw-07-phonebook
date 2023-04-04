import { configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

//---------PERSIST--------------
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { ContactsPersistedReducer } from './contactsSlice';

//--------------------------------------------------
export const store = configureStore({
  reducer: {
    contacts: ContactsPersistedReducer,
    filter: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
