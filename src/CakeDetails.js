import {useParams,Link} from "react-router-dom";
import cakes from './cakedata';
import {connect} from 'react-redux'
import axios from 'axios'
function CakeDetails(props){
    const param=useParams();
    console.log(param.cakeid)
    const cakeresult=cakes.filter(cake=>cake.cakeid==param.cakeid)
    console.log(cakeresult)
    let addToCart=()=>{
    let cakedetails=cakeresult[0]
    if(localStorage.token)
    {
        let add_to_cart_api="https://apibyashu.herokuapp.com/api/addcaketocart"
            let cakedata={
                cakeid:cakedetails.cakeid,
                name:cakedetails.name,
                image:cakedetails.image,
                price:cakedetails.price,
                weight:"300"
            }
            axios({
                url:add_to_cart_api,
                method:"post",
                data:cakedata,
                headers:{Authtoken:localStorage.token}
            }).then((response)=>{
                console.log("add to cart api response",response)
                props.dispatch({
                    type:"ADDTOCART",
                    payload:cakedetails
                })
                alert(response.data.message);
            }).catch((error)=>{
                alert('something went wrong')
                console.log('error from addToCartAPI',error)
            })
    }else{
        alert('please do login to add product in the cart')
            props.history.push("/login")
    }
    }
    return (
        <div>
            <div className="card mb-3" style={{"max-width":"540px"}}>
            <div className="row g-0">
                <div className="col-md-12 text-center">
                <img src={cakeresult[0].image} alt="..."/>
                </div>
                <div className="col-md-8 text-center">
                <div className="card-body">
                    <h5 className="card-title">{cakeresult[0].name}</h5>
                    <p className="card-text">{cakeresult[0].price}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default connect()(CakeDetails);