import React from 'react';
import './skills.css';
import java from '../../assets/java.png';
import Js from '../../assets/js.png';
import db from '../../assets/database.png';
import node from '../../assets/nodejs.png';
import react from '../../assets/physics.png';

export const skills = () => {
  return (
    <section id='skill'>
          <span className='title'>What I Know</span>
          <span className='description'> I`m a skilled developer with the knowledge of HTML CSS and many other languages which defined below. I can work effectively on them. These all help me to complete my task effectively</span>
          <div className='skillbars'>
          <div className='skillbar'>
                <img src={java} alt="java"className="img"/>
                <div className='text'>
                  <h2>JAVA</h2>
                  <p className='skt'>Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.</p>
                </div>
          </div>
          <div className='skillbar'>
                <img src={Js} alt="javascript" className="img"/>
                <div className='text'>
                  <h2>JavaScript</h2>
                  <p className='skt'>JavaScript is a scripting language that enables you to create dynamically updating and pretty much everything else.</p>
                </div>
          </div>
          <div className='skillbar'>
                <img src={react} alt="react" className="img"/>
                <div className='text'>
                  <h2>REACT.JS</h2>
                  <p className='skt'>React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
                </div>
          </div>
          <div className='skillbar'>
                <img src={node} alt="node"className="img"/>
                <div className='text'>
                  <h2>NODE.JS</h2>
                  <p className='skt'>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser.</p>
                </div>
          </div>
          <div className='skillbar'>
                <img src={db} alt="mongoDb" className="img"/>
                <div className='text'>
                  <h2>MONGODB</h2>
                  <p className='skt'>MongoDB is an open-source, document-oriented database management system (DBMS) that stores large amounts of data efficiently. </p>
                </div>
          </div>
          </div>
    </section>
  )
}
export default skills ;
