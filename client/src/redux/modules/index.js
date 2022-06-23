import { combineReducers } from "redux";
import user from "./user";
import docuemnt from "./document";
import discussion from "./discussion";

export default combineReducers({
  user,
  docuemnt,
  discussion,
});
