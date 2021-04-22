import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
let Cart=function(props){
    let [items, setItems]=useState([])
    function fetchItems()
    {
        let add_to_get_cart="https://apibyashu.herokuapp.com/api/cakecart"
        axios({
            url:add_to_get_cart,
            method:"post",
            headers:{Authtoken:localStorage.token}
        }).then((response)=>{
            console.log(response.data)
            setItems(response.data.data)
            props.dispatch({
                type:"CART_ITEMS",
                payload:response.data.data
            })
            console.log("local ",items)
        }).catch((error)=>{
            console.log('error from cakecart api',error)
        }) 
    }
    useEffect(()=>{
        fetchItems()
    },[])
    let deleteProd=(prod)=>{
        let deletecake="https://apibyashu.herokuapp.com/api/removecakefromcart";
        axios({
            url:deletecake,
            method:"post",
            data:{cakeid:prod.cakeid},
            headers:{Authtoken:localStorage.token}
        }).then((response)=>{
          //  console.log(response.data)
            //setItems(response.data.data)
            props.dispatch({
                type:"REMOVEFROMCART",
                payload:prod
            })
            fetchItems()
            alert('item deleted')
           // console.log("local ",items)
        }).catch((error)=>{
            console.log('error from cakecart api',error)
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
        {items && items.map((prod,index)=>{
            return( <tr key={index}>
                <td>{prod.name}</td>
                <td>₹{prod.price}</td>
                <td><img src={prod.image} style={{"width":"100px","height":"100px"}}/></td>
                <td><button className="btn btn-danger" onClick={(event)=>deleteProd(prod)}>delete</button></td>
            </tr>)
        })}
        <tr><td colSpan="4" style={{"text-align":"right"}}><Link to="/checkout"><button className="btn btn-primary">Checkout</button></Link></td></tr>
        </table>
    </h1></>)
}

export default connect((state,props)=>{
    return{
        items:state && state?.cart
    }
})(Cart)