import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Albums } from './pages/albums/albums';
import { Songs } from './pages/songs/songs';
import { SearchSongs } from './pages/search-songs/search-songs';
import { Footer } from './pages/footer';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/albums' element={<Albums />}/>
          <Route path='/songs' element={<Songs />}/>
          <Route path='/search-songs' element={<SearchSongs />}/>
          <Route path='*' element={<h1 style={{textAlign: "center"}}>Error 404</h1>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
