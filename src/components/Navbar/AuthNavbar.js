import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import image4 from "../../images/ebam-logo-3.gif";
import { Link } from 'react-router-dom';
import { AuthSidebarData, SidebarData } from '../SidebarData';
import './AuthNavbar.css';
import { IconContext } from 'react-icons';

function AuthNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{marginBottom:"4px"}}/> 
          </Link>
          <nav style={{color:"#fdfdfd",marginLeft:"2%",fontSize:"16px"}}>
          <img src={image4} alt="your-image-description-here" width="170" height="50" />
          </nav>
        </div>
        <div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {AuthSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
       
      </IconContext.Provider>
    </>
  );
}

export default AuthNavbar;
