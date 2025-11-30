import React from 'react'
// import mypic from '../Images/myprofile.png';
// import mypic from '../Images/profile.jpg';
import CV from "../CV/Mohammad_Naveel_Updated.pdf"; 



function Hero() {
  return (
    <>
    <div className="container mt-4 " id='Hero'>
        <div className="row  border border-2 border-white rounded-2 p-4" >
        <div className='Image and title col-md-6'>
        
        </div>
        <div className='Intro col-md-6 rounded '>
        
        <h1>Hi , I am Muhammad Naveel</h1>
        <h3>Frontend Developer</h3>
        <p>I create responsive and modern web applications with React and JavaScript. 
I love turning ideas into clean, user-friendly digital experiences.</p> 
       
       <div className="buttons d-flex gap-3">
        <button className='btn '>
         <a href={CV}  download target='blank' className='text-decoration-none ' style={{
          background:"transparent", color:"navy"
         }}> Download CV</a></button>
         <button className='btn '>
         <a href="#Contact"    className='text-decoration-none ' style={{
          background:"transparent", color:"navy"
         }}> Contact Me </a></button>
         </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero
