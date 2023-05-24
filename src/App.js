import React, { createContext, useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';

export const ContContext = createContext();


function App() {
  const [count, setCount] = useState(0);
  return (
    <ContContext.Provider value={[count, setCount]}>
      <Container>
        <Home></Home>
      </Container>
    </ContContext.Provider>
  );
}

export default App;
