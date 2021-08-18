import react from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import StartPage from "./components/startpage/Startapp"
import SignUpPage from "./components/signuppage/Signupapp"
import {motion} from 'framer-motion' 

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/startpage" component={StartPage} />
        <Route path="/signuppage" component={SignUpPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
