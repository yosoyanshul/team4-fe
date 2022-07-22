import { EmployeeContext } from "../contexts/EmployeeContext";
import{Modal,Button} from 'react-bootstrap';
import {useEffect,useState, useContext } from "react";
import EditForm from "./EditForm";
const ProfileList =({employee})=>{
    const {deleteEmployee}=useContext(EmployeeContext)
    
    const[show,setshow]=useState(false)
    const handleShow=()=>setshow(true);
    const handleClose=()=>setshow(false);

    useEffect(()=>{
        handleClose()
       },[employee])
    return(
        <>
        
						<td>{employee.name}</td>
						<td>{employee.email}</td>
						<td>{employee.address}</td>
						<td>{employee.phone}</td>
                        <td>
							<button onClick={handleShow}className="btn text-warning btn-act" data-toggle="modal"  title="Edit">Edit</button>
							{/* <button onClick={()=>deleteEmployee(employee.id)} className="tn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button> */}
						</td>
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
        </>                     
    )
}
export default ProfileList;