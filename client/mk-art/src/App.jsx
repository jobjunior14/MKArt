import './App.css';
import { Home } from './component/home';
import { Footer } from './component/footer';
import {Project } from './component/project';
import {About} from './component/about';
import {Contact} from './component/contacts';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shared } from './component/routing';
import ProfilChanger from '../src/admin/profil';
import GalleryChanger from '../src/admin/gallery';
import GalleryOnclick from '../src/admin/galleryOnclick';
import './style.css'

function App() {
  
  return  (
    <div className=''>

      <Router>
            <Routes>
                <Route path='/' element = {<Shared/>}>
                    <Route index element = {<Home/>}/>
                    <Route path='/projets' element = {<Project/>}/>
                    <Route path='/apropos' element = {<About/>}/>
                    <Route path='/contacts' element = {<Contact/>}/>
                    <Route path='/admin' element = {<ProfilChanger/>}/>
                    <Route path='/gallery' element = {<GalleryChanger/>}/>
                    <Route path='/gallery/:id' element = {<GalleryOnclick/>}/>
                </Route>
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
};

export default App;
