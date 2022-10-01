import React, {useContext, useState} from 'react'
import { UserContext } from '../usercontext/usercontext'
import { useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Edit = () => {
    const[users, setUsers]= useContext(UserContext);
    const {id}=useParams();
    const user=users.filter((user)=>user.id===id);
    
    const [name, setName]=useState(user[0].name);
    const [address, setAddress]=useState(user[0].address);
    const [qualification, setQualification]=useState(user[0].qualification);
    const [mobile, setMobile]=useState(user[0].mobile);

    const updateName=(e)=>{
      setName(e.target.value);
      const editName= name;
      user[0].name=editName;
    }
    const updateAddress=(e)=>{
      setAddress(e.target.value);
      const editAddress=address;
      user[0].address=editAddress;
    }
    const updateQualification=(e)=>{
      setQualification(e.target.value);
      const editQualification=qualification;
      user[0].qualification=editQualification;
    }
    const updateMobile=(e)=>{
      setMobile(e.target.value);
      const editMobile=mobile;
      user[0].mobile=editMobile;
    }
    const editUser=(e)=>{
      e.preventDefault();
      setUsers([...users]);
    }
  return (
      <div style={{width:"60%", margin:"5rem auto"}}>
      <Form>
      <Form.Group className="mb-3">
            <Form.Label><h2> ID : {id}</h2></Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={name} placeholder={user[0].name} onChange={updateName}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={address} placeholder={user[0].address} onChange={updateAddress}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Qualification</Form.Label>
            <Form.Control type="text" name="qualification" value={qualification}  placeholder={user[0].qualification} onChange={updateQualification}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control type="text" name="mobile" value={mobile}  placeholder={user[0].mobile} onChange={updateMobile}/>
        </Form.Group>
        <Link to={"/"}>
        <Button variant="primary" type="submit" onSubmit={editUser}>
                Submit
        </Button>
        <Button variant="info" type="submit">Go To Back</Button>
        </Link>
     </Form>
    </div>
  )
}

export default Edit
