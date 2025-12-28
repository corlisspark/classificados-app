/* This file is useful as it contains all our reducers in one place */

import { combineReducers } from 'redux';
import classifiedReducer from './classifiedsReducer';

export default combineReducers({
    classifiedsList: classifiedReducer
})