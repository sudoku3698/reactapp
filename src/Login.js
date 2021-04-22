import {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'

function Login(props){
    var [loginerrors,setLoginerrors]=useState({})
    var validate=function(element){
        var errors={}
        if(!element.email.value)
        {
            errors.email="Email is required";
        }else
        {
            var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!regexEmail.test(element.email.value)) {
                errors.email="Enter valid Email";
            }
        }
        if(!element.password.value)
        {
            errors.password="Password is required";
        }
        var errorKeys=Object.keys(errors)
        if(errorKeys.length>0)
        {
            return errors
        }else{
            setLoginerrors({})
            return false
        }

    }
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

    let login=function(event){
        event.preventDefault()
        var form=document.getElementById('loginForm')
        var errors=validate(form.elements)
        if(errors)
        {
            setLoginerrors(errors)
        }else{
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
                        //props.setlogin(true)
                        props.dispatch({
                            type:"LOGIN",
                            payload:response.data
                        })
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
    
    }
    return(
        <div>
            {!props.islogin?<><h3>Login</h3>
            <form id="loginForm" onSubmit={login}>
            <div style={{"width":"50%", "margin":"auto"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={getEmail}></input>
                    {user.email}
                    <div className="text-danger">{loginerrors.email}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={getPassword}></input>
                        {user.password}    
                        <div className="text-danger">{loginerrors.password}</div>
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>
                    
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
                </form>
                </>:''}
            
        </div>
    )
}

export default connect()(Login)