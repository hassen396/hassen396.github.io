import React from 'react';
import { Container } from 'bootstrap';

export default function Home() {
  return (
    <div id="home" className="bg-primary text-white text-center py-5">
      <Container>
        <h1>Hello, I'm <span className="fw-bold">[Your Name]</span></h1>
        <p className="lead">I’m a passionate software developer building modern web apps</p>
        <a href="#projects" className="btn btn-light mt-3">View My Work</a>
      </Container>
    </div>
  );
}
