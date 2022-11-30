import './App.css';
import Login from './Components/Forms/login';
import Register from './Components/Forms/RegistroUsuarios';
import Paquete from './Components/Forms/RegistroPaquetes';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/Register" element={<Register />} />
          <Route path="/paquete" element={<Paquete />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
