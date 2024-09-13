import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employees';

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',

});

export default store;
export type RootState = ReturnType<typeof store.getState>;