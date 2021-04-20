import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Card(props){
    //console.log(props)
    let addToCart=()=>{
        if(localStorage.token)
        {
            let cakedetails=props.cake
            props.dispatch({
                type:"ADDTOCART",
                payload:cakedetails
            })
            alert('item added to cart');
        }else
        {
            alert('please do login to add product in the cart')
            props.history.push("/login")
        }
    }
    return (
        <>
            <div className="card" style={{"width": "20.3rem"}}>
            <img src={props.cake.image} style={{"height": "200px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.cake.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div>
            <Link to={`/cake/${props.cake.cakeid}`}><a  href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" className="btn btn-primary mr-3">Go somewhere</a></Link>
            <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
            </div>
            </div>
        </div>
        </>
    );
}

export default connect()(withRouter(Card))