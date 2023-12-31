import icon from '../images/git-icon.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import { Link } from 'react-router-dom';
import "../Styles/Contact.css"

const Contact = () => {
    return ( 
        <div className="text-center " style={{height:'max-content',minHeight:'100vh' }}>
            <h1>Contact</h1>
            <div className='contact-container d-flex flex-row justify-content-center align-items-center p-5 ' >
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={icon} height='150' width='auto'/>
                <h3 className='mt-3'><Link to="https://github.com/karamas13" target="_blank">GitHub</Link></h3>

              </div>
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={instagram} height='150' width='auto'/>
                <h3 className='mt-3'><Link to="https://github.com/karamas13" target="_blank">Instagram</Link></h3>

              </div>
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={facebook} height='150' width='auto'/>
                <h3 className='mt-3'><Link to="https://github.com/karamas13" target="_blank">Facebook</Link></h3>

              </div>             
            </div>
             <div className=' p-5 mx-auto text-center'>
              <h3 style={{width:'fit-content'}} className='email d-flex flex-column mx-auto  p-3 border border-dark rounded border-3 '>Email: devhub38@gmail.com</h3>
             </div> 
        </div>
     );
}
 
export default Contact;