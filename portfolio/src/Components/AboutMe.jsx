import mypic from "../Images/about-banner-img.svg"
import LI from "../Images/lang-icon.svg"        
import React from 'react'

function AboutMe() {
  return (
   <>
   <div className="container my-3 " >
        <h2>About Me </h2>
        <hr />
   <div className="main  row">
    <div className=" left col-md-4 ">
       <img src={mypic} alt="" 
       style={{
        height:"300px"
       }}/>

    </div>
    <div className="right col-md-8  " id="AboutMe">

          <p>   I’m a passionate frontend developer who loves building responsive and user-friendly web applications. 
            I constantly challenge myself to learn new technologies and improve my coding skills. 
            My goal is to create meaningful digital experiences that help people and solve real-world problems.

        </p>
        <div className="row">
            <div className="col-md-6">
                <h2>1 Month</h2>
                <h6>years of Experience</h6>
            </div>
            <div className="col-md-6">
                <h2>05</h2>
                <h6>Projects Completed</h6>
            </div>

        </div>
        <hr />
        <div className=" d-flex flex-wrap  gap-3">
        
        <span className="fw-bold"><img src={LI} alt="" /> Languages</span>
             <span> English</span>
        <span> Urdu</span>

        </div>
            
    </div>
    
   </div>
   </div>
   </>
  )
}

export default AboutMe
