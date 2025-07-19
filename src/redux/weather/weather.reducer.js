import { Get_Response_Data, Get_Response_Error, Request_To_Get_Data } from "./weather.type";
const weatherInit={
  isLoading:true,
  data:{},
  isError:false,
}
const weatherReducer=(state=weatherInit,action)=>{
switch (action.type) {
  case Request_To_Get_Data:
    return {...state,isloading:true}
  case Get_Response_Data:
    return {...state,data:action.payload,isLoading:false}
  case Get_Response_Error:
    return {...state,data:action.payload,isError:true};
  default:
    return state;
}
}

export default weatherReducer;