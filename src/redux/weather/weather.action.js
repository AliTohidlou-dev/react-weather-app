import { Get_Response_Data, Get_Response_Error, Request_To_Get_Data } from "./weather.type"

export const requestToGetData=()=>{
  return(
    {
      type:Request_To_Get_Data
    }
  )
}

export const getData=(payload)=>{
return(
  {
    type:Get_Response_Data,
    payload
  }
)
}

export const getError=(payload)=>{
  return(
    {
      type:Get_Response_Error,
      payload
    }
  )
}