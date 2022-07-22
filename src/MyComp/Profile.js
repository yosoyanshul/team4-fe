import React from "react";
import EditForm from "./EditForm";
import { useEffect,useState } from "react";
import employee from "./ProfileList"
import ProfileList from"./ProfileList"
import {Modal,Button} from 'react-bootstrap';
import { useContext } from "react";
import {EmployeeContext} from "../contexts/EmployeeContext";
// import ProfileList from "./ProfileList";
const Profile = ()=>{
 const {employees}=useContext(EmployeeContext);
 const[show,setshow]=useState(false)
 const handleShow=()=>setshow(true);
 const handleClose=()=>setshow(false);

 useEffect(()=>{
  handleClose()
 },[employees])

return(
    <>
        <React.Fragment>
   
    	<div className="table-title">
      <div className="row">
        <div className="col-sm">
          <h2>Manage Data</h2>
        </div>
        {/* <div className="col-sm-6">
          <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>					
        </div> */}
      </div>
    </div>

    <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
       
   <tbody>  
    <tr>
   
    </tr>
    {
      employees.map(employee=>(
        <tr key={employee.id}>
           <ProfileList employee={employee}/>
        </tr>
      ))
    }
    </tbody> 
    </table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        
       </React.Fragment>
     
</>
  )
 }
export default Profile;