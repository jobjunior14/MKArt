import './App.css';
import { Home } from './component/home';
import { Footer } from './component/footer';
import {Project } from './component/project';
import {About} from './component/about';
import {Contact} from './component/contacts';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import { Shared } from './component/routing';
import ProfilChanger from '../../../ddf/src/admin/profil';
import GalleryChanger from '../../../ddf/src/admin/gallery';
import GalleryOnclick from '../../../ddf/src/admin/galleryOnclick';

function App() {
  
  return (
    
      <Router>
            <Routes>
                <Route path='/' element = {<Shared/>}>
                    <Route index element = {<Home/>}/>
                    <Route path='/projet' element = {<Project/>}/>
                    <Route path='/about' element = {<About/>}/>
                    <Route path='/contact' element = {<Contact/>}/>
                    <Route path='/admin' element = {<ProfilChanger/>}/>
                    <Route path='/gallery' element = {<GalleryChanger/>}/>
                    <Route path='/gallery/:id' element = {<GalleryOnclick/>}/>
                </Route>
            </Routes>
          <Footer/>
      </Router>
  );
};

export default App;
