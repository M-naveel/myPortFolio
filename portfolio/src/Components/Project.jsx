import React from 'react'
import bgchanger from '../Images/Porjects/BGchanger.png'
import DigitalClock from '../Images/Porjects/digitalclock.png'
import Counterapp from '../Images/Porjects/counterapp.png'
import fp from '../Images/Porjects/foodpanda.png'
import pg from '../Images/Porjects/password generator.png'
import WC from '../Images/Porjects/WC.png'
import cart from '../Images/Porjects/cart.png'



function Project() {

const projects = [
  {id:1 , pname:"BGColorchanger" , img:bgchanger , domain:"https://easy-bg-change.netlify.app/"},
  {id:2 , pname:"Counter App" , img:Counterapp , domain:"https://counterlite.netlify.app/"},
  {id:3 , pname:"DigitalClock" , img:DigitalClock , domain:"https://clockreactapp1.netlify.app//"},
  // {id:4 , pname:"Battery Refill Reminder" , img:bgchanger , domain:"https://easy-bg-change.netlify.app/"},
  {id:5 , pname:"Random Password Generator" , img:pg , domain:"https://02password-generator.netlify.app/"},
  {id:6 , pname:"Foodpanda" , img:fp , domain:"https://foodpanda-uiclone.netlify.app/"},
  {id:7 , pname:"Weather Checker" , img:WC , domain:"https://naveel-weather-updates.netlify.app/"},
  {id:7 , pname:"Shopping Cart" , img:cart , domain:"https://naveel-cart.netlify.app/"},
]

  return (
    <>
    <div className="container" >
        <h1>Projects</h1>
        <hr />
        <div className="row g-3 px-2" id='Projects' >
         
         {
          projects.map(pcard=>(
            <div key={pcard.id} className=" col-md-6"
            >
          
            <img src={pcard.img} alt="" style={{ maxWidth:"100%"
              , border:'2px solid white'
            }} className='rounded-2' />
            <h3 className='mt-2'><u>{pcard.pname}</u></h3>
        
            <a href={pcard.domain} className='btn ' target='blank'>
            Click to Preview</a>
           
          
          </div>
          ))
         }
          
        </div>
    </div>
    </>
  )
}

export default Project
