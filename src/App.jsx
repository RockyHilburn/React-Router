import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Yellow from './components/Yellow';
import Home from './components/Home';

function App() {

  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/blue">BLUE</Link>
          <Link to="/red">RED</Link>
          <Link to="/green">GREEN</Link>
          <Link to="/yellow">YELLOW</Link>
          <Link to="/"></Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
