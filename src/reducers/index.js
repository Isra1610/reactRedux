import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import publicacionesReaducer from "./publicacionesReaducer";

export default combineReducers({
	usuariosReducer,
	publicacionesReaducer,
});
