import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/home';
import Breeding from './Pages/Breeding/breeding';

function App() {
  return (
    <Router >
    <div className="app">
    <Routes>
    <Route exact path="/Vectra" element={<><Home/></>}/>
    <Route exact path="/Vectra/Breeding" element={<><Breeding/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
