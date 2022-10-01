import React, {useContext} from 'react'
import { UserContext } from '../usercontext/usercontext'
import { useParams, Link } from 'react-router-dom'
import { Modal, Button, Dialog  } from 'react-bootstrap';
const Delete = () => {
    const [users, setUsers]=useContext(UserContext);
    const {id}=useParams();

    const deleteuser=()=>{
       const userAfterDelete=users.filter(user=>user.id	!=id)
       setUsers(userAfterDelete);
    }
  return (
    <div>
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Are You Sure to Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Link to={"/"}>
                    <Button variant="secondary">Cancle</Button>
                    <Button variant="danger"  onClick={()=>deleteuser(id)}>Yes</Button>
            </Link>
      
        </Modal.Footer>
      </Modal.Dialog>
      </div>
  )
}

export default Delete
