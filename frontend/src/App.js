import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import MySideNav from './Components/SideNav';
import AllPosts from './Pages/AllPosts';
import Info from './Pages/Info';
import Contact from './Pages/Contact';

function App() {


  const handleClick = () => {

  }

  return (
    <Router>
      <MySideNav />
     <div className="App">
      <Routes>
        <Route exact path="/" />
        <Route index element={ <Home /> } />
        <Route path="/pages/create" element={<Create />} />
        <Route path="/pages/AllPosts" element={<AllPosts />} />
        <Route path="/pages/Info" element={<Info />} />
        <Route path="/pages/Contact" element={<Contact />} />
       </Routes> 
     </div>
    </Router>
  );
}

export default App;
