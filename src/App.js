import logo from './logo.svg';
import './App.css';
import Home from "./MyComp/Home";
import Content from "./MyComp/Content";
import About from "./MyComp/About";
import Uploa from "./MyComp/Uploa";
import Search from "./MyComp/Search";
import Profile from "./MyComp/Profile";
import Foote from "./MyComp/Foote";
// import 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import EmployeeContextProvider from './contexts/EmployeeContext';

function App() {
  return (
 <>
 <Router>
       
  <Home/>
       <Routes>
          {/* <Route path="/Upload" element={<Uploa/>}>
          </Route> */}
          <Route path="/" element={<Content/>}>
          </Route>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Profile" element={
          <EmployeeContextProvider> <Profile/></EmployeeContextProvider>
         }>
          </Route>
          <Route path="/">
          </Route>
      </Routes>
     
   <Foote/>
</Router>
 </>
  );
}

export default App;
