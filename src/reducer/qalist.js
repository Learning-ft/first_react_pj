
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  list: [
    {
      id : 1,
      title: "example1",
      content: "content1",
      state: false,
    },
    {
    id : 2,
    title: "example2",
    content: "content2",
    state: false,
    },  
    {
    id : 3,
    title: "example3",
    content: "content3",
    state: false,
    },
  ]
}

const crudSlice = createSlice({
  name:'list',
  initialState,
  reducers : {
    addQalist(state,action){
      const newAdd = {
        id: new Date().toISOString(),  // 리덕스에서는 newDate 문자열로 변환해야한다. 
        title : action.payload.title,  // immer 규칙에 따라 해야한다. 
        content : action.payload.content,
        state: false
      }
      state.list.push(newAdd)
    },
    // updateQalist(state,action){
    // },
    // deleteQalist(state,action){}
  }
})


export const { addQalist } = crudSlice.actions
export default crudSlice.reducer
