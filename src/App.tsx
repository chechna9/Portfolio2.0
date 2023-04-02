import React from 'react';
import './App.css';
import Home from './sections/homePage';
import Projects from './sections/projects';
import Certeficates from './sections/certeficates';
import Experiences from './sections/experiences';
import ContactMe from './sections/contactMe';

function App() {
  return (
    <>
    <Home/>
    <Projects/>
    <Certeficates/>
    <Experiences/>
    <ContactMe/>
    </>
  );
}

export default App;
