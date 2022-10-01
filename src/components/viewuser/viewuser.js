import React, {useContext} from 'react'
import { UserContext } from '../usercontext/usercontext'
import { useParams, Link } from 'react-router-dom'
import {Card,ListGroup, Button} from 'react-bootstrap';
const Viewuser = () => {
  const [users, setUsers]=useContext(UserContext);
  const {id}=useParams();
  const user=users.filter(user=>user.id===id);
  return (
    <div style={{margin: '0 auto', width: "30%"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Header><h3>User Details</h3></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>ID: {user[0].id}</ListGroup.Item>
        <ListGroup.Item>Name: {user[0].name}</ListGroup.Item>
        <ListGroup.Item>Address: {user[0].address}</ListGroup.Item>
        <ListGroup.Item>Education: {user[0].qualification}</ListGroup.Item>
        <ListGroup.Item>Mobile No: {user[0].mobile}</ListGroup.Item>
      </ListGroup>
      </Card>
      <Link to={"/"}>
      <Button className="mt-2">Go to Home</Button>
      </Link>
      
    </div>
  )
}

export default Viewuser
