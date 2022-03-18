import React, {useState} from 'react';
import NavBar from './Components/NavBar/Index';
import Contador from './Components/Contador/Index';
import './app.css';

function App() {
  const [idioma, setIdioma] = useState(true);

  const cambiarIdioma = ()=> idioma? setIdioma(false) : setIdioma(true);
  return (
    <div className="App">
      <NavBar cambiarIdioma={cambiarIdioma} idioma={idioma} setIdioma={setIdioma}/>
      <Contador cambiarIdioma={cambiarIdioma} idioma={idioma} setIdioma={setIdioma}/>
    </div>
  );
}

export default App;
