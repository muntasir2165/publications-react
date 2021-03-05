import { combineReducers } from 'redux';

import user from './userReducer';
import loading from './loadingReducer';
import publications from './publicationsReducer';

const rootReducer = combineReducers({ user, loading, publications });

export default rootReducer;
