// App.js
import React from 'react';
import styled from 'styled-components';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import NavBar from './components/NavBar';

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`;

function App() {
  return (
    <>
      <NavBar />
      <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;

