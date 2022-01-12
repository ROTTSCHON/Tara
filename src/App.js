import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/header';
import Buttons from './Components/Button/button';

function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
    <Routes>
    <Route exact path="/Vectra" element={<><Buttons/></>}/>
    <Route exact path="/"element={<Link to="/Vectra">Merge</Link>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
