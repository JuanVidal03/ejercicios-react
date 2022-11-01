import './App.css';
import RenderContacto from './ejercicios/clases1-2-3-7-8-9/RenderContacto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Form1 from './components/formsExamples/Form1';
import AxiosExample from './components/AxiosExample';
// import Clock from './ejercicios/clases4-5-6/Clock';
// import ChangeColor from './ejercicios/clases-10-11-12/ChangeColor';


function App() {

  
  return (
/*
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={ <HomePage/> }/>
        <Route exact path='/contactos' element={ <RenderContacto/> }/>
        <Route exact path='/about' element={ <AboutPage/> }/>
      </Routes>

    </Router>
*/
  //EJEMPLOS FORMULARIOS
  /* 
  <div>
  <Form1/>
  </div>
  */

  <AxiosExample/>

  );
}

export default App;
