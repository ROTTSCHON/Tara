import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Pages/About/about';
import Home from './Pages/Home/home';

function App() {
  return (
    <Router basename='/Vectra'>
    <div className="app">
    <Routes>
    <Route exact path="/Vectra" element={<><Home/></>}/>
    <Route exact path="/Vectra/About"element={<><About/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
