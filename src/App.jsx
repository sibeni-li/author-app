import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Chapters from './pages/Chapters';
import AllCharacters from './pages/AllCharacters';
import OneCharacter from './pages/OneCharacter';
import Flash from './pages/Flash';
import About from './pages/About';
import Error from './pages/Error';
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/stories/' element={<Stories/>}/>
          <Route path='/chapters/:id' element={<Chapters/>}/>
          <Route path='/allcharacters' element={<AllCharacters/>}/>
          <Route path='/onecharacter/:id' element={<OneCharacter/>}/>
          <Route path='/flash' element={<Flash/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </PageWrapper>
    </Router>
  );
};

export default App;
