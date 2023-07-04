import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import mern from '../images/mern.png';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
      navigate('./pages/create');
    }

    return (  
     <div className='pt-5 ' style={{height:'100%',minHeight:'100vh'}}> 
      <div className='container w-50  p-5 text-center border border-primary bg-primary p-2 text-dark bg-opacity-75 rounded'>
          <h1 style={{fontSize:'3em'}}>WELCOME</h1>
          <img className="m-4" src={mern} alt="Mern stack example" height="350" width="auto"></img>
          <p style={{fontSize:'1.5em'}}>This is a MERN stack CRUD application</p>
          <p style={{fontSize:'1.5em'}}>Test it out yourself by clicking the button bellow:</p>
          <Button style={{fontSize:'2em'}} className='btn btn-primary border border-dark border-2 p-2' onClick={handleNavigate}>CREATE</Button>         
       </div>
      </div> 
    );
}
 
export default Home;