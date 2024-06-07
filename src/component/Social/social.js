import React from 'react';
import './social.css';
import Instagram from '../../assets/instagram.png';
import Github from '../../assets/github.png';
import Telegram from '../../assets/telegram.png';
import LinkedIn from '../../assets/linkedin.png';

const Social = () => {
  return (
    <section id='social'>
            <h2>Social Sites</h2>
            <div className='des'>There are some social media sites through which you can connect me.Also you can see my profile over there.</div>
            <div className='site'>
                <a href='https://www.linkedIn.com/in/rohit-singh-7b5704258'><img src={LinkedIn} alt='linkedIn' className='img'/></a>
                <a href='https://github.com/Rohitsingh2005'><img src={Github} alt='Github' className='img'/></a>
                <a href='https://www.instagram.com/thakur_rohit._999'><img src={Instagram} alt='Instagram' className='img'/></a>
                <a href='https://www.t.me/RohitSingh1007'><img src={Telegram} alt='Telegram' className='img'/></a>
            </div>
    </section>
  )
}

export default Social;