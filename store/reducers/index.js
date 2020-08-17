import { combineReducers } from 'redux'
import { postReducer } from './postReducer';
export default combineReducers({
//post คือ ชื่อของชุด State
post:postReducer
});