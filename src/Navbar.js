import {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Cart from './Cart'
import {connect} from 'react-redux'
import './cartStyle.css';

function Navbar(props){
    const history = useHistory();
    var [counter,setCounter]=useState(0);
    var showhide="block";
    if(localStorage.token)
    {
        var showhide="none";
    }
    var [searchfield,setSearchfield]=useState('');
    let search=function(event){
        event.preventDefault()
        console.log("search",searchfield)
        let searchurl="/?qu="+searchfield
        history.push(searchurl)
    }
    let getSearch=function(event){
        setSearchfield(event.target.value)
    }

    let onLogout=()=>{
        props.dispatch({
            type:"LOGOUT"
        })
        localStorage.clear()
        history.push('/login')
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            Sudesh Cake Shop
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/"><a className="nav-link" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item" style={{"display":showhide}}>
                <Link to="/login"><a className="nav-link" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">Login</a></Link>
                </li>
                <li className="nav-item" style={{"display":showhide}}>
                <Link to="/signup"><a className="nav-link" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">SignUp</a></Link>
                </li>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">Action</a>
                    <a className="dropdown-item" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
                </ul>
                {localStorage.email && "hey "+ localStorage.email}
                <Link to="/cart"><div class="wrapper mr-4">
                <i class="fa" style={{"font-size":"24px"}}>&#xf07a;</i>
                 <span style={{"text-align":"center"}}> {props.counter} </span>
                 </div></Link>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearch}/>
                <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                {localStorage.email ?<button onClick={onLogout} className="btn btn-primary">Logout</button>:''}
               
                
            </div>
            </nav>
        </>
    )
}

export default connect(function(state,props){
   // console.log('cart',state && state?.cart.length)
    return{
        user:state && state?.user?.name,
        setlogin:state && state["isloggedin"],
        cart_items:state && state?.cart,
        counter:state?.cart?.length
    }
})(Navbar)