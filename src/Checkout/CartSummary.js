import {connect} from "react-redux"
let CartSummary=function(props){
    let items={}
    let total_cost=0
    return (
        <>
        <h3>Cart Summary</h3>
        <table className="table" >
        <thead>
            <tr> 
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
            </tr>
        </thead>
        {props.items && props.items.map((prod,index)=>{
            total_cost+=prod.price
            return( <tr>
                <td>{prod.name}</td>
                <td>₹{prod.price}</td>
                <td><img src={prod.image} style={{"width":"100px","height":"100px"}}/></td>
            </tr>)
        })}
        <tr><th>Total</th><th>₹{total_cost}</th><td></td></tr>
        </table>
        </>
    );   
}

export default connect(function(state,props){
    return{
        items:state && state?.cart
    }
})(CartSummary)