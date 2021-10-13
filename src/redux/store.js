import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { rootReducers } from "./reducer/rootReducer"
import rootSaga from '../sagas/searchSagas';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

