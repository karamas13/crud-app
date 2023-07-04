import mern2 from '../images/mern2.png';

const Info = () => {
    return ( 
        <div style={{height:'100vh'}} className="text-center">
            <h1 className="pt-5">Info</h1>
          <div >
            <p style={{fontSize:'1.2em'}} className=" mx-auto m-5 p-5 bg-light bg-opacity-75 mb-0 border border-dark  ">This is the first project we made utilizing the full potential of the MERN technological stack.
             <br></br> 
               Specifiaclly this is a CRUD application (Copy,Read,Update,Delete) showcasing all the necessary functionalities
            <br></br>   
               required to build a full stack web application using the MERN stack. 
            </p>
          </div>
            
          <div className="card bg-light bg-opacity-75">
          <img className="m-4 mx-auto" src={mern2} alt="Mern stack example" height="auto" width="250"></img>
          <h2>THE MERN STACK</h2>
          <p className='w-75 mx-auto'>The MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. 
             <br></br>
             MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. 
             It is designed to make the development process smoother and easier.
             <br></br>
             Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.</p>
          </div>  
            
        </div>
     );
}
 
export default Info;