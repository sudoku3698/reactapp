import {useParams} from "react-router-dom";
import cakes from './cakedata';
function CakeDetails(props){
    const param=useParams();
    console.log(param.cakeid)
    const cakeresult=cakes.filter(cake=>cake.cakeid==param.cakeid)
    console.log(cakeresult)
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
                </div>
            </div>
            </div>
        </div>
    );
}

export default CakeDetails;