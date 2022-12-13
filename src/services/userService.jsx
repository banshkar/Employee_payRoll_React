import { myaxios } from "./helps";

 export const Registration=(user)=>{
     console.log("working")
     console.log("send to database",user)
    return myaxios.postForm("/employee/add",user)
}
export const GetData=()=>{
     return myaxios.get("/employee/getAllEmployeeDetails").then(response=>response.data
       )
}
export const DeletedData=(myid)=>{
     return myaxios.delete(`/employee/deleted/${myid}`).then(response=>response.data)
}
export const GetUserDetails=(id)=>{
  return myaxios.get(`/employee/getDetails/${id}`).then(response=>response.data)
}
export const UpdateUser =(id ,user)=>{
   return myaxios.put(`/employee/update/${id}`,user).then(response=>response.data)
}