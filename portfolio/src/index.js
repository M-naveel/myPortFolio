import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Educationandskill from './Components/Educationandskill';
import ContactMe from './Components/ContactMe';
import Project from './Components/Project';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Hero/>
    <AboutMe />
    <Educationandskill />
    <Project />
    <ContactMe />
    </BrowserRouter>
  </React.StrictMode>
);

