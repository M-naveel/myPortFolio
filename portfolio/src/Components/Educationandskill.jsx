import React from 'react'
import Html from "../Images/html.png"
import Css from "../Images/css-3.png"
import Js from "../Images/js.png"
import Bootstrap from "../Images/bootstrap.png"
import Mysql from "../Images/mysql.png"
import Php from "../Images/php.png"
import Reacticon from "../Images/React.png"

function Educationandskill() {

    const images = [
        {id:1 , name :"Html" , progresswidth:90 , img: Html },
        {id:2 , name :"Css" , progresswidth:80 , img: Css },
        {id:3 , name :"Js" , progresswidth:70 , img: Js },
        {id:4 , name :"Bootstrap" , progresswidth:80 , img: Bootstrap },
        {id:5 , name :"Mysql" , progresswidth:80 , img: Mysql },
        {id:6 , name :"Php" , progresswidth:70 , img: Php },
        {id:7 , name :"React" , progresswidth:50 , img: Reacticon },
    ]

    return (
        <>
            <div className="container mt-4">
                <h2>Education and Skills </h2>
                <hr />
                <div className="row">
                    <div className="Education col-md-6 d-flex align-items-center">
                        <ul>
                            <li>
                                <h3>Matriculation 2016</h3>

                                <p>    Passed Matriculation from Shan Grammar School at 2016
                                </p>
                            </li>
                            <li>
                                <h3>Diploma in Information Technology 2022</h3>

                                <p>    Passed Intermediate from Simsat Technical College 2022
                                </p>
                            </li>
                            <li>
                                <h3>Bachelor in Computer Science 2026</h3>

                                <p>    Currently studying in the final year .
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="Skills col-md-6 " id='Skills'>

                        <div className="row">
                        {
                            images.map(image =>(
                                <div key={image.id} className=" col-md-4 mb-3" >
                                <div  className="skills card p-3 text-center d-flex justify-content-center align-items-center">
                                    <img src={image.img} alt="HTML" width="100px" height="100px" />
                                    <h5 className="mt-2">{image.name}</h5>
                                    <div className="w-100 mt-3">
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width:`${image.progresswidth}%` }}
                                                aria-valuenow="90"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            ))
                        }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Educationandskill
