import { createContext, useEffect } from "react";
import { useState } from "react";
import {v4 as uuid4} from 'uuid';
import EditForm from "../MyComp/EditForm";
// import updatedEmployee from "../MyComp/EditForm";
export const EmployeeContext=createContext(); //give provider and consumer property
const EmployeeContextProvider=(props)=>{
    const [employees,setEmployees]=useState
([
  { id:1, name: 'Thomas Hardy10', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},

]
)
useEffect(()=>{
    setEmployees(JSON.parse(localStorage.getItem('employees')));
},[])
useEffect(()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
})
const deleteEmployee =(id)=>{
    setEmployees(employees.filter(employee=>employee.id !== id))
}
const updateEmployee =(id,updatedEmployee)=>{
    setEmployees(employees.map((employee)=>employee.id === id? updatedEmployee : employee))
}
    return(
        <EmployeeContext.Provider value={{employees, deleteEmployee,updateEmployee}}>
         {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContextProvider