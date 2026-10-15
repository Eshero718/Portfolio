import React from "react";
import "./styles.css";

import profile from "./assets/acero.jfif";








export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo" onClick={scrollToTop}>Ace</h2>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>

      
      <section id="home" className="home">
        <h1>Ace Robin <br /><span>Sunio</span></h1>
        <p>Creating digital experiences that look good and are easy to use.</p>
        <div className="buttons">
          <button className="viewwork" onClick={() => scrollToSection("projects")}>View Work</button>
          <button className="contactme" onClick={() => scrollToSection("contact")}>Contact Me</button>
        </div>
      </section>

      
      <section id="about" className="about">
        <div>
          <h3>Designing with <span>purpose & passion</span></h3>
          <p>Hi! I'm Ace Robin Sunio, a 3rd-year student at Western Institute of Technology (WIT). 
          <br />I'm a UI/UX designer who enjoys creating simple, clean, and user-friendly designs. <br />
I love learning new design skills and making websites and apps look good and easy to use.</p>        
        </div>
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>
      </section>

      
      

      
      
<section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="projects-grid">
    <div
      className="project-card"
      style={{ backgroundImage: "url(challenge1.svg)" }}
    >
      <div className="overlay">
        <h3>Challenge 1</h3>
        <a
          href="https://www.figma.com/design/axDeqL2APTuJO2SfxSYecw/challenge-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div
      className="project-card"
      style={{ backgroundImage: "url(challenge2.svg)" }}
    >
      <div className="overlay">
        <h3>Challenge 2</h3>
        <a
          href="https://www.figma.com/design/aB1uKieNx5PGsP4wdON4MK/Challenge-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div
      className="project-card"
      style={{ backgroundImage: "url(restnbuds.svg)" }}
    >
      <div className="overlay">
        <h3>Rest N Buds</h3>
        <a
          href="https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div
      className="project-card"
      style={{ backgroundImage: "url(Awesometodos.svg)" }}
    >
      <div className="overlay">
        <h3>AwesomeTodos</h3>
        <a
          href="https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div
      className="project-card"
      style={{ backgroundImage: "url(siklab.svg)" }}
    >
      <div className="overlay">
        <h3>Siklab</h3>
        <a
          href="https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>


  <div
      className="project-card"
      style={{ backgroundImage: "url(pawloc.svg)" }}
    >
      <div className="overlay">
        <h3>Pawloc</h3>
        <a
          href="https://pawloc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
     <div
      className="project-card"
      style={{ backgroundImage: "url(BHAS.svg)" }}
    >
      <div className="overlay">
        <h3>Barangay Health Appointment System</h3>
        <a
          href="https://witpetbarangay.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  </div>

  



</section>


      
      <section id="contact" className="contact">
        <h3>Lets <span>Connect</span></h3>
        <div className="contact-buttons">
          <button onClick={() => window.open("https:sunioacerobin28@gmail.com")}>Gmail</button>
          <button onClick={() => window.open("https:www.linkedin.com/in/ace-robin-sunio-1ba58a3b9")}>LinkedIn</button>
          <button onClick={() => window.open("https://github.com/Eshero718")}>Github</button>
          <button onClick={() => window.open("https://www.facebook.com/share/18h6LUUVPN/")}>Facebook</button>
        </div>
      </section>
    </div>
  );
}