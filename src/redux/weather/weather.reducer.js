import { Get_Response_Data, Get_Response_Error, Request_To_Get_Data } from "./weather.type";
const weatherInit={
  isLoading:true,
  data:null,
  isError:null,
}
const weatherReducer=(state=weatherInit,action)=>{
switch (action.type) {
  case Request_To_Get_Data:
    return {...state,isloading:true,data:null,isError:null}
  case Get_Response_Data:
    return {...state,data:action.payload,isLoading:false}
  case Get_Response_Error:
    return {...state,data:null,isError:action.payload};
  default:
    return state;
}
}

export default weatherReducer;