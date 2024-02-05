import { createStore } from "redux";
import { combineReducers } from "redux";
import FanLetters from "../modules/fanLetters";

const rootReducer = combineReducers({
  FanLetters,
});
const store = createStore(rootReducer);

export default store;
