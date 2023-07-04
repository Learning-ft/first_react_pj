import {combineReducers} from '@reduxjs/toolkit' 
import { crudSlilce } from './qalist'

// 전역상태 이름 
const rootreducer = combineReducers({qalist: crudSlilce.list})


export default rootreducer

