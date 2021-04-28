import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../styles/About.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai'

export default function About() {
    return (
      <>
        <Jumbotron className="jumbotron bg-transparent" fluid>
  <Container>
    <h1 id="CodingExp">Coding Experiment</h1>
    <p id="jumboText">
    I
                am transitioning from the fitness industry to the Web devoloper
                world. Im currently working in IT with plans to begin my web development career in the
                near future. This site will give you an idea of my progression thoughout my career as I
                will periodically update my portfolio with live sites and their links. Enjoy!</p>
  </Container>
</Jumbotron>
<div className="iconCenter">
<a href='www.linkedin.com/in/ryan-lackey-37bb35a4' target="#">
<FaLinkedin /> </a>

<a href="https://github.com/RyRyIT" target="#">
<FaGithub /> 
</a>

<AiFillFileImage />
</div>
</>
    )
}