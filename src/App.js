import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/home';

function App() {
  return (
    <Router >
    <div className="app">
    <Routes>
    <Route exact path="/Vectra" element={<><Home/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
