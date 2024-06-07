import React, { useState } from 'react';
import './navbar.css';
import Me from '../../assets/me.jpg';
import {Link} from 'react-scroll'; 
import ContactImg from '../../assets/contact-form.png';
import Menu from '../../assets/list.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={Me} alt='Logo' className='logo'/>
      <div className='deskTopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='DeskTopItem'>Home</Link>
            <Link  activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='DeskTopItem'>About</Link>
            <Link  activeClass='active' to='social' spy={true} smooth={true} offset={-100} duration={500} className='DeskTopItem'>ConnectWithMe</Link>
      </div>
      <button className='deskTopMenuBtn' onClick={ ()=>{
            document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
      }}>
        <img src={ContactImg} alt="contact" className='deskTopImg'/>Contact Me
      </button>
      <img src={Menu} alt='menu' className='menu'  onClick={()=>setShowMenu(!showMenu)}/>
      <div className='deskMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='DeskItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link  activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='DeskItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link  activeClass='active' to='social' spy={true} smooth={true} offset={-100} duration={500} className='DeskItem' onClick={()=>setShowMenu(false)}>ConnectWithMe</Link>
            <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='DeskItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar ;