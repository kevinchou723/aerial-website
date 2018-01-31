/**
 * This file combines all the reducers used in aria-optimize 
 * and exports them combined
 * 
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    routing: routerReducer
});
