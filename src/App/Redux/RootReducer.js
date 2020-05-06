import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pollsReducer from "./Polls/PollsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["polls"],
};

const rootReducer = combineReducers({ polls: pollsReducer });
export default persistReducer(persistConfig, rootReducer);
