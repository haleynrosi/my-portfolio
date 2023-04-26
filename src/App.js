import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about-me' element={<About/>}></Route>
          <Route path='/portfolio-projects' element={<Projects/>}></Route>
          <Route path='/contact-me' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    
  
  );
}

export default App;
