import { combineReducers } from '@reduxjs/toolkit';
import crudSlice from '../reducer/qalist';

const rootReducer = combineReducers({ qalist: crudSlice});

export default rootReducer;