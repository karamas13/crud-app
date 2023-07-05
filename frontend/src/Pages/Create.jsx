import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Create = () => {
    const navigate = useNavigate();
    const [input, setInput]= useState({
        title:"",
        description:"",
    })
    
   const handleNavigate = () => {
    navigate(-1)
   }

   const handleChange = (e) =>{
    const {name, value} = e.target;

    setInput(prevInput =>{
        return {
        ...prevInput,
        [name]: value,
      }
    })
 }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        title:input.title,
        description:input.description
       }

       axios.post('http://localhost:3001/create' , newPost)
       navigate("/")
      
   }
  
    return (
      <div className="container p-5 " style={{height:'100vh'}}> 
       <div className='className="container-sm d-flex justify-content-center align-items-center mt-2'>  
         <Button className='bg-transparent h-5 border border-transparent border-0' onClick={handleNavigate}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></Button>
         <h1 className='text-dark'>CREATE</h1>
        </div>
    
        <Form className='d-flex  flex-column border border-dark border-2 rounded mx-auto p-5 w-75 mt-5 text-dark bg-primary bg-opacity-75'>
          <Form.Group >
            <Form.Label>Title</Form.Label>
            <Form.Control
             name="title"
             value={input.title}  
             onChange={handleChange}    
             className='border border-dark ' 
             type="title"                          
             placeholder="Title" 
             required        
            />
            <Form.Label className='mt-5'>Description</Form.Label>     
            <Form.Control 
             name="description"
             className='border border-dark'
             type="description"                          
             placeholder="Description"
             value={input.description} 
             onChange={handleChange}    
             required        
            />           
          </Form.Group>
          <Button onClick={handleSubmit} type="submit" className='btn bg-success bg-opacity-50 w-20 mx-auto mt-5 border-dark border-2'><h5>Save Post</h5></Button>  
        </Form>
      </div>
     );
}
 
export default Create;