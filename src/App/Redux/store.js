import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import RootReducer from "./RootReducer";

const middlewares = [];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
