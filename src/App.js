import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import ReverseAlphabet from './Pages/ReverseAlphabet';
import LongestSentence from './Pages/LongestSentence';
import ArrayKata from './Pages/ArrayKata';
import MatrixNxN from './Pages/MatrixNxN';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/soal1' element={<ReverseAlphabet/>}></Route>
          <Route path='/soal2' element={<LongestSentence/>}></Route>
          <Route path='/soal3' element={<ArrayKata/>}></Route>
          <Route path='/soal4' element={<MatrixNxN/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
