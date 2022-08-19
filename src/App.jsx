
import './App.css'; 
import {Nav} from "./components/NavBar/Nav";
import {HashRouter, Route, Routes} from 'react-router-dom';
import Index from './components/Index';  
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Administracion from './components/Administracion';
import Enfermeria from './components/Enfermeria';
import Informatica from './components/Informatica';
import Valores from './components/Valores'; 
import Info606 from './components/Info606';
import Info605 from './components/Info605';
import Radio from './components/radio/Radio';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Nav /> 
        <Routes>
          <Route exact path="*" element={<Index />}/>
          <Route index element={<Index />}/> 
          <Route exact path="/nosotros" element={<Nosotros />}/>
          <Route exact path="/contacto" element={<Contacto />}/>
          <Route exact path="/administracion" element={<Administracion />} /> 
          <Route exact path="/enfermeria" element={<Enfermeria />} />
          <Route exact path="/informatica" element={<Informatica />} />
          <Route exact path="/valores" element={<Valores />}/>
          <Route exact path='/info-606' element={<Info606 />} />
          <Route exact path='/info-605' element={<Info605 />} />
        </Routes>
        <Radio />
      </div> 
    
    </HashRouter>
  )
}

export default App
