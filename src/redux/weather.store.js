import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weather.reducer";
import logger from "redux-logger";
const weatherStore=configureStore({
  reducer:{
    weather:weatherReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default weatherStore;