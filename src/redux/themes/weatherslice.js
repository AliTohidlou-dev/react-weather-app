import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: null,
  isError: null,
};
export const getweather=createAsyncThunk('weather/getweather',async({city,API})=>{
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch weather data");
  }

  return res.json();
})
const weatherSlice=createSlice({
  name:'weather',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(getweather.pending,(state)=>{
      state.isLoading=true;
      state.data=null;
      state.isError=null;
    });
    builder.addCase(getweather.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.data=action.payload;
      state.isError=null;
    });
    builder.addCase(getweather.rejected,(state,action)=>{
      state.isLoading=true;
      state.data=null;
      state.isError=action.error.message;
    })
  }
})


export default  weatherSlice.reducer;
