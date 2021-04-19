import {useParams,Link} from "react-router-dom";
import cakes from './cakedata';
import {connect} from 'react-redux'
function CakeDetails(props){
    const param=useParams();
    console.log(param.cakeid)
    const cakeresult=cakes.filter(cake=>cake.cakeid==param.cakeid)
    console.log(cakeresult)
    let addToCart=()=>{
        let cakedetails=cakeresult[0]
        props.dispatch({
            type:"ADDTOCART",
            payload:cakedetails
        })
       // alert('added to cart');
    }
    return (
        <div>
            <div className="card mb-3" style={{"max-width":"540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={cakeresult[0].image} alt="..."/>
                </div>
                <div className="col-md-8">
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