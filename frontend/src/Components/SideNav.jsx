import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from "react-router-dom";
import "../Styles/SideNav.css"


const MySideNav = () => {
    return ( 
       <SideNav 
       onSelect={selected=> {
        
       }}
       className='sidenav'
        >
           <SideNav.Toggle style={{fontSize:'30px'}}/>
           <SideNav.Nav defaultSelected="home">
            <NavItem className="nav-item">
                <NavIcon><Link to="/"  className='nav-links'><svg xmlns="http://www.w3.org/2000/svg"  height="2em" viewBox="0 0 640 512"><path d="M480 0c-17.7 0-32 14.3-32 32V192 512h64V192H624c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H512c0-17.7-14.3-32-32-32zM416 159L276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288H64V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h64.7l.2 0h-1V159z"/></svg></Link></NavIcon>
                <NavText ><Link to="/" className='nav-links' style={{color:'##f1f1f1'}} >Home</Link></NavText>
            </NavItem>
            <NavItem className="nav-item">
                <NavIcon><Link to="./pages/AllPosts" className='nav-links'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg></Link></NavIcon>
                <NavText><Link to="./pages/AllPosts" className='nav-links' style={{color:'#f1f1f1'}}>All-Posts</Link></NavText>
            </NavItem>
            <NavItem className="nav-item" >
                <NavIcon><Link to="./pages/Info" className='nav-links'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></Link></NavIcon>
                <NavText><Link to="./pages/Info" className='nav-links' style={{color:'##f1f1f1'}}>Info</Link> </NavText>
            </NavItem>
            <NavItem className="nav-item">
                <NavIcon><Link to="./pages/contact" className='nav-links'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/></svg></Link></NavIcon>
                <NavText><Link to="./pages/contact" className='nav-links' style={{color:'##f1f1f1'}}>Contact</Link></NavText>
            </NavItem>
            <NavItem className="nav-item">
                <NavIcon><Link to="./pages/create" className='nav-links'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></Link></NavIcon>
                <NavText><Link to="./pages/create" className='nav-links' style={{color:'##f1f1f1'}}>Create</Link></NavText>
            </NavItem>
           </SideNav.Nav>
        </SideNav>
       )
}
 
export default MySideNav;