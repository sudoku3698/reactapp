import './App.css';
import Navbar from './Navbar';
import SignUp from './SignUp'
import Login from './Login'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './Home'
import {useState} from 'react'
import CakeDetails from './CakeDetails'
import axios from 'axios';
import {connect} from 'react-redux'
import Cart from './Cart';
import Checkout from './Checkout'
function App(props) {
  var [login,setLogin]=useState(false);

if(localStorage.token && !props.user)
{
    var token=localStorage.token
    axios({
      method:'get',
      url:"https://apibyashu.herokuapp.com/api/getuserdetails",
      headers:{
        authtoken:token
      }
    }).then((response)=>{
      props.dispatch({
        type:"INITIALISE_USER",
        payload:response.data.data
      })
    },(error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Router>
      <Navbar islogin={login} setlogin={setLogin}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/cake/:cakeid" exact component={CakeDetails}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
      </div>
      
  );
}

export default connect()(App);
