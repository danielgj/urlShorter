import { combineReducers } from 'redux';

import { urls } from './url.reducer';

const rootReducer = combineReducers({
    //Declare individual reducers here
    urls
});

export default rootReducer;