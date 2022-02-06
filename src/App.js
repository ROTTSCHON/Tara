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
    <Router basename='/' >
    <div className="app">
    <Routes>
    <Route index path="/" element={<><Home/></>}/>
    <Route path="/Breeding" element={<><Breeding/></>}/>
    <Route path="/Sale" element={<><Sale/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
