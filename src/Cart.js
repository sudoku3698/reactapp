import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
let Cart=function(props){
    var items=[]
    let deleteProd=(prod)=>{
        props.dispatch({
            type:"REMOVEFROMCART",
            payload:prod
        })
    }
    
    return (<><h1>
        <table className="table" >
        <thead>
            <tr> 
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        {props.items && props.items.map((prod,index)=>{
            return( <tr>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.image} style={{"width":"100px","height":"100px"}}/></td>
                <td><button className="btn btn-danger" onClick={(event)=>deleteProd(prod)}>delete</button></td>
            </tr>)
        })}
        <tr><td colSpan="4" style={{"text-align":"right"}}><Link to="/checkout"><button className="btn btn-primary">Checkout</button></Link></td></tr>
        </table>
    </h1></>)
}

export default connect(function(state,props){
    return{
        items:state && state?.cart
    }
})(Cart)