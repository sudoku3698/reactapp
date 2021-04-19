import {connect} from 'react-redux'
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
        {props.items.map((prod,index)=>{
            return( <tr>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.image} style={{"width":"100px"}}/></td>
                <td><button className="btn btn-danger" onClick={(event)=>deleteProd(prod)}>delete</button></td>
            </tr>)
        })}
        </table>
    </h1></>)
}


export default connect(function(state,props){
    return{
        items:state && state?.cart
    }
})(Cart)