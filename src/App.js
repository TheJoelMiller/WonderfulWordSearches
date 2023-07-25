import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import WordSearch from './pages/navbar/WordSearch';
import About from './pages/navbar/About';
import WordSearchFooter from './pages/WordSearchFooter';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<WordSearch/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <WordSearchFooter />
    </Router>
  );
}

export default App;