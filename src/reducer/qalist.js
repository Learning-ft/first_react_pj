
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  list: [],
  state: {
    loading: false,
    done: false,
    error: null,
  }
}

export  const crudSlilce = createSlice({
  name:'list',
  initialState,
})