import React from 'react'

function ContactMe() {
  return (
    <>
    <div className="container mt-3" id="Contact">
        <h1>Contact Me</h1>
        <hr />
        <h4>Get in Touch</h4>
        <p>If you have any questions, or want to work together, feel free to reach out.</p>
        <p>

        <a
          id='icon'
        
        
        href="https://www.linkedin.com/in/muhammad-naveel-004942380/"
        target='blank' className='text-decoration-none text-white' ><i className='bi bi-linkedin bi-larger' style={{
             
        }} >
            </i> Muhammad Naveel</a>
        </p>
        
        <p  
             
        ><i className='bi bi-envelope'></i> mohammadnaveel047@gmail.com</p> 
        <p   
        ><i className='bi bi-phone'></i> Contact No: 03082347484</p>
    </div>
    </>
  )
}

export default ContactMe
