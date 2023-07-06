import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import mern from '../images/mern.png';
import '../Styles/Home.css';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
      navigate('./pages/create');
    }

    return (  
     <div className='card-parent pt-5 ' style={{height:'100%', minHeight:'100vh'}}> 
      <div id='home' className='home-card card mx-auto w-50  p-5 text-center border border-primary bg-primary p-2 text-dark bg-opacity-75 rounded' style={{minWidth:'fit-content'}}>
          <h1 style={{fontSize:'3em'}}>WELCOME</h1>
          <img id='mern-img1' className=" mx-auto m-3  mern" src={mern} alt="Mern stack example" height="auto" width="350"></img>
          <p style={{fontSize:'1.5em'}}>This is a MERN stack CRUD application</p>
          <p style={{fontSize:'1.5em'}}>Test it out yourself by clicking the button bellow:</p>
          <Button style={{fontSize:'2em'}} className='create-button btn btn-primary border border-dark border-2 p-2 w-50 mx-auto' onClick={handleNavigate}>CREATE</Button>         
       </div>
      </div> 
    );
}
 
export default Home;