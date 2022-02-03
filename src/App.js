import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/home';
import Breeding from './Pages/Breeding/breeding';
import Sale from './Pages/Sale/sale';

function App() {
  return (
    <Router >
    <div className="app">
    <Routes>
    <Route exact path="/Vectra" element={<><Home/></>}/>
    <Route exact path="/Vectra/Breeding" element={<><Breeding/></>}/>
    <Route exact path="/Vectra/Sale" element={<><Sale/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
