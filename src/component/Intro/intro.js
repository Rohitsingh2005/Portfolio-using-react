import React from 'react';
import './intro.css';
import Me from '../../assets/development.png'
import {Link} from 'react-scroll';
import Hire from '../../assets/job-hunting.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='myIntro'>
            <span className='hello'>Hello</span>
            <span className='introtext' > I`m <span className='name'>Rohit Singh</span><br/>
            Web Devrloper</span>
            <p className='myself'>I`m a passionate web developer. </p>
            <Link><button className='Btn'  onClick={ ()=>{
            document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
      }}><img src={Hire} className='btnImg' alt='btn' />Hire me</button></Link>
        </div>
        <img src={Me} className='Me' alt='Me'/>
    </section>
  )
}

export default Intro ;