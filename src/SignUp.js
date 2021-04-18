import {Component} from 'react';
import axios from 'axios';
class SignUp extends Component{
    constructor(){
        super()
        this.state={
            onlineusers:0,
            error:''
        }
    }
    user={

    }
    register=()=>{
      
        if(!this.user.email && !this.user.password)
       {
        this.setState({setError:"Please enter valid credentials"})
        
       }else{
        let loginapi="https://apibyashu.herokuapp.com/api/register"
        axios({
            url:loginapi,
            method:"post",
            data:this.user
        }).then((response)=>{
            if(response.data.token)
            {
                localStorage.token=response.data.token
                localStorage.email=response.data.email
                //props.setlogin(true)
                this.setState({setError:""})
                this.props.history.push("/")
            }else
            {
                this.setState({setError:"Invalid Credentials"})
               // alert("Invalid Credentials")
            }
        },(error)=>{
            console.log("error from login api",error)
        })
       }
    }
    
    getEmail=(event)=>{
        this.user.email= event.target.value;
    }

    getPassword=(event)=>{
        event.preventDefault();
        this.user.password=event.target.value
    }

    render(){
        return(
                <div style={{"width":"50%", "margin":"auto"}}>
                    <h2>Signup</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.getEmail}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.getPassword}></input>
                    </div>
                    <div className="text-danger">
                        {this.state.errorMessage}
                    </div>
                    
                    <button className="btn btn-primary" onClick={this.register}>Login</button>
                </div>
        )
    }
}

export default SignUp