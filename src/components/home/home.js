import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../usercontext/usercontext';
import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUsers]=useContext(UserContext);
  return (
    <div>
      <Link to={'/create-user'}>
        <Button className='mb-2' variant="primary">Create User</Button>
      </Link>
       
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Qualification</th>
          <th>Mobile Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        users.map((user)=>{
            const {id,name,address,qualification,mobile}=user;
            return  <tr>
            <td key={id}>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{qualification}</td>
            <td>{mobile}</td>
            <td>
            <Link to={"view-user/"+id}><Button>Show Details</Button></Link>
            <Link to={"edit-user/"+id}><Button variant="success" className='m-1'>Edit</Button></Link>
             <Link to={"delete-user/"+id}><Button variant="danger">Delete</Button></Link>
            </td>
            </tr>
        })
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default Home;
