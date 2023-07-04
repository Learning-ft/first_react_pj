
import {configureStore} from '@reduxjs/toolkit'
import rootreducer from '../reducer'

const store = configureStore({
  rootreducer
})

export default store