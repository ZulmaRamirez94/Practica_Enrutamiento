import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bienvenido from './Componentes/Bienvenido';
import Numerocuadro from './Componentes/Numerocuatro';
import Hola from './Componentes/Hola';
import Hello from './Componentes/Hello';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/Bienvenido' element={<Bienvenido/>}/>
          <Route path='/4' element={<Numerocuadro/>}/>
          <Route path='/Hola' element={<Hola/>}/>
          <Route path='/Hola/azul/rojo' element={<Hello/>}/>
        </Routes>    
    </BrowserRouter>
  );
}
export default App;
