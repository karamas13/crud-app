import icon from '../images/git-icon.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Contact = () => {
    return ( 
        <div className="text-center " style={{height:'100%',minHeight:'100vh' }}>
            <h1>Contact</h1>
            <div className='d-flex flex-row justify-content-center align-items-center p-5 ' >
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={icon} height='150' width='auto'/>
                <h3 className='mt-3'>GitHub</h3>

              </div>
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={instagram} height='150' width='auto'/>
                <h3 className='mt-3'>Instagram</h3>

              </div>
              <div className='d-flex flex-column m-5 p-3 border border-dark rounded border-3 '>
                <img src={facebook} height='150' width='auto'/>
                <h3 className='mt-3'>Facebook</h3>

              </div>
            </div>
        </div>
     );
}
 
export default Contact;