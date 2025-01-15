import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Chapter from './pages/Chapter';
import UniverseandCharacters from './pages/Universeandcharacters';
import Flash from './pages/Flash';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.scss'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stories/' element={<Stories/>}/>
        <Route path='/chapter/:id' element={<Chapter/>}/>
        <Route path='/universeandcharacters' element={<UniverseandCharacters/>}/>
        {/* <Route path='/universeandcharacters/characters/:id'/> */}
        <Route path='/flash' element={<Flash/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
