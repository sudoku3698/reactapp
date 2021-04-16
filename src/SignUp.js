import {Component} from 'react';

class SignUp extends Component{
    constructor(){
        super()
        this.state={
            onlineusers:0
        }
    }
    user={

    }
    register=()=>{
      
       if(!this.user.email && !this.user.password)
       {
        this.setState({
            errorMessage:"Please enter valid credentials"
        })
        
       }else{
        console.log(this.user)
        this.setState({
            errorMessage:""
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