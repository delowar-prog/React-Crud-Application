import React, {useContext,useState} from 'react'
import { UserContext } from '../usercontext/usercontext'
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Create = () => {
 const [users, setUsers]=useContext(UserContext);
 const [id, setId]=useState("");
 const [name, setName]=useState("");
 const [address, setAddress]=useState("");
 const [qualification, setQualification]=useState("");
 const [mobile, setMobile]=useState("");

const updateId=(e)=>{
    setId(e.target.value);  
}
const updateName=(e)=>{
    setName(e.target.value);  
}
const updateAddress=(e)=>{
    setAddress(e.target.value);  
}
const updateQualification=(e)=>{
setQualification(e.target.value);  
}
const updateMobile=(e)=>{
    setMobile(e.target.value);  
}
const handleSubmit=(e)=>{
    e.preventDefault();
    setUsers([...users, {id:id, name:name, address:address, qualification:qualification, mobile:mobile}])
    setId("");
    setName("");
    setAddress("");
    setQualification("");
    setMobile("");
}
  return (
    <div style={{width:"60%", margin:"5rem auto"}}>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" name="id" value={id} placeholder="Enter ID" onChange={updateId}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={name} placeholder="Enter Name" onChange={updateName}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={address} placeholder="Enter Address" onChange={updateAddress}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Qualification</Form.Label>
            <Form.Control type="text" name="qualification" value={qualification} onChange={updateQualification} placeholder="Enter Qualification"/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control type="text" name="mobile" value={mobile} onChange={updateMobile} placeholder="Enter Moible" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        <Link to={"/"}>
        <Button variant="info" type="submit">Go To Back</Button>
        </Link>


     </Form>
    </div>
  )
}

export default Create
