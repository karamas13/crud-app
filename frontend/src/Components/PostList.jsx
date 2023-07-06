import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import '../Styles/AllPosts.css';

const PostList = ({posts}) => {
  const [show, setShow] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/allposts/${id}`)
    .catch((err) => console.log(err));
     window.location.reload();
  }

   const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
   }

   const handleChange = (e) => {
    const {name, value} = e.target;

    setUpdatedPost(prev =>{
        return {
        ...prev,
        [name]: value,
      }
    })
   }

   const handlePost = () => {
    axios.put(`http://localhost:3001/allposts/${updatedPost._id}`, updatedPost);
    
    handleClose();
    window.location.reload();
   }
  
   return ( 
     <div className="p-5 " >

       {posts.map(post => (
         <div style={{minWidth:'fit-content'}} className='post-container container row border border-primary border-3 mx-auto text-center  w-25  m-5 p-3 bg-info bg-opacity-50 rounded' key={post._id}>
           <div className="col"> 
            <h2>{(post.title)}</h2>
            <p>{post.description}</p>

           </div>
          <div className=' d-flex flex-column justify-content-evenly mt-2'>
           <Button onClick={() => updatePost(post)} className='button1 btn btn-warning border border-dark m-3 w-50 mx-auto'>Update</Button>
           <Button onClick={() => handleDelete(post._id)} className='button1 btn btn-danger border border-dark m-3 w-50 mx-auto'>Delete</Button>
           </div>
           <Modal className='bg-dark bg-opacity-25' show={show} onHide={handleClose}>
           <Modal.Header closeButton >
           <Modal.Title>Edit</Modal.Title>
           </Modal.Header>
           <Modal.Body >
             <Form>
              <Form.Group>
                <Form.Control 
                 placeholder='Title' 
                 name='title' 
                 value={updatedPost.title ? updatedPost.title : ""} 
                 onChange={handleChange}
                />
                <Form.Control 
                 placeholder='Description'
                 name='description'
                 value={updatedPost.description ? updatedPost.description : "" }
                 onChange={handleChange}
                />
              </Form.Group>
             </Form>
           </Modal.Body>
           <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
         </div> 
         
       ))}
       
      </div>
     );
}
 
export default PostList;