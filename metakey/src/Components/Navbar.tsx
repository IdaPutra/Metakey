import React from 'react';
import '../style.css'
import logo from '../metakey.png'
function Navbar() {
  return (
    <div className="admin-sidebar" >
      <h1 style={{textAlign:"center",color:"white",marginTop:"10%"}}>Metakey</h1>
        <div className='navbar-title'><img src ={logo} ></img></div>
        <div className="sidenav-container">

        <ul className="sidenav admin-sidenav list-unstyled">

                  
                </ul>
        </div>
            
            </div> 
  );
}

export default Navbar;
