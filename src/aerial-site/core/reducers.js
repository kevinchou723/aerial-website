/**
 * This file combines all the reducers used in aria-optimize 
 * and exports them combined
 * 
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as workReducer } from '../work';
import { reducer as homeReducer } from '../home';

export default combineReducers({
    routing: routerReducer,
    work: workReducer,
    home: homeReducer
});
