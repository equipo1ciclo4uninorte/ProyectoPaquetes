import './App.css';
import Login from './Components/Forms/login';
import Register from './Components/Forms/RegistroUsuarios';
import Paquete from './Components/Forms/RegistroPaquetes';
import Home from './Components/Forms/HomeVisual';
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
          <Route path="/HomeVisual" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
