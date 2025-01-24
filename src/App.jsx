import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Chapters from './pages/Chapters';
import Characters from './pages/Characters';
import Flash from './pages/Flash';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stories/' element={<Stories/>}/>
        <Route path='/chapters/:id' element={<Chapters/>}/>
        <Route path='/characters' element={<Characters/>}/>
        {/* <Route path='/universeandcharacters/characters/:id'/> */}
        <Route path='/flash' element={<Flash/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
