import './App.css';
import { Home } from './component/home';
import { Footer } from './component/footer';
import {Project } from './component/project';
import {About} from './component/about';
import {Contact} from './component/contacts';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './component/navBar';
import "./style.css";
import { Shared } from './component/routing';

function App() {
  return ( 
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element = {<Shared/>}>
                <Route index element = {<Home/>}/>
                <Route path='/projet' element = {<Project/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/contact' element = {<Contact/>}/>
            </Route>
        </Routes>
            <Footer/>
    </Router>
  );
};

export default App;
