import './App.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Registe/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
             <Route path="/Login"element={<Login/>}>  </Route>
        </Routes>
      </Router>     
 
    <Router>
      <Routes>
           <Route path="/Register"element={<Register/>}>  </Route>
      </Routes>
    </Router>

    </header>
    </div>
  );
}

export default App;




