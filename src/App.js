import './App.css';
import Navbar from './Navbar';
import SignUp from './SignUp'
import Login from './Login'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './Home'
import {useState} from 'react'
import CakeDetails from './CakeDetails'
function App() {
  var [login,setLogin]=useState(false);
  return (
    <div>
      <Router>
      <Navbar islogin={login} setlogin={setLogin}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/cake/:cakeid" exact component={CakeDetails}/>
          <Route path="/*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
      </div>
      
  );
}

export default App;
