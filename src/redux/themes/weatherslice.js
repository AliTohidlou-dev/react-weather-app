import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: null,
  isError: null,
};

const weatherSlice=createSlice({
  name:'weather',
  initialState,
  reducers:{
    requestToGetData:(state)=>{
      state.isLoading=true,
      state.data=null,
      state.isError=null
    },
    getData:(state,action)=>{
      state.isLoading=false,
      state.data=action.payload,
      state.isError=null
    },
    getError:(state,action)=>{
      state.isLoading=true,
      state.data=null,
      state.isError=action.payload
    }
  }
})


export default  weatherSlice.reducer;
export const {requestToGetData,getData,getError}=weatherSlice.actions;