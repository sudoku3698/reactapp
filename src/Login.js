import {useState} from 'react'
import axios from 'axios';

function Login(props){
    // console.log("login compoenent",props)
    // useEffect(()=>{
    //     alert('Mounted and Updated')
    // },[])
    var [error,setError]=useState('')
    var user={}
    var [user, setUser]=useState({})
    let getEmail=(event)=>{
        setUser({
            ...user,
            email:event.target.value
        })
        user.email=event.target.value;
    }

    let getPassword=(event)=>{
        setUser({
            ...user,
            password:event.target.value
        })
        user.password=event.target.value;
    }

    let login=function(){
    if(!user.email && !user.password)
       {
        setError("Please enter valid credentials")
        
       }else{
        let loginapi="https://apibyashu.herokuapp.com/api/login"
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
            if(response.data.token)
            {
                localStorage.token=response.data.token
                localStorage.email=response.data.email
                props.setlogin(true)
                setError("")
                props.history.push("/")
            }else
            {
                setError("Invalid Credentials")
               // alert("Invalid Credentials")
            }
        },(error)=>{
            console.log("error from login api",error)
        })
       }
    }
    return(
        <div>
            {!props.islogin?<><h3>Login</h3>
            <div style={{"width":"50%", "margin":"auto"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={getEmail}></input>
                    {user.email}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={getPassword}></input>
                        {user.password}    
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>
                    
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </div></>:''}
            
        </div>
    )
}

export default Login