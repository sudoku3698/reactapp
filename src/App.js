import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel'
import Card from './Card';
import SignUp from './SignUp'
import Login from './Login'
import cakes from './cakedata';
import {useState} from 'react';
function App() {
var [login,setLogin]=useState(false);
  return (
    <div>
      <Navbar islogin={login} setlogin={setLogin}/>
      <Carousel/>
      <Login islogin={login} setlogin={setLogin}/>
      {/* <center><SignUp/></center> */}
      <div className="row">
        {cakes.length>0 && cakes.map((each,index)=>{
          return(<Card cake={each} key={index}/>)
        })}
      
     </div>
    </div>
  );
}

export default App;
