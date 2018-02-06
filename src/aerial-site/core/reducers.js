/**
 * This file combines all the reducers used in aria-optimize 
 * and exports them combined
 * 
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as workReducer } from '../work';

export default combineReducers({
    routing: routerReducer,
    work: workReducer
});
