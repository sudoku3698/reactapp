import Carousel from './Carousel'
import Card from './Card';
import cakesdata from './cakedata';
import queryString from "query-string";
import { useState,useEffect } from 'react/cjs/react.development';
import axios from 'axios'
function Home(props){
  const parsed = queryString.parse(props.location.search);
  var [cakes,setCakes]=useState(cakesdata)
  useEffect(()=>{ 
    console.log(parsed.qu)
    //alert("Mounted and Updated")
    //let apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q=chees"
    if(parsed.qu!==undefined)
    {
      let apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+parsed.qu
      axios({
               url: apiurl,
               method:"get"
           }).then((response)=>{
               console.log("success ", response.data)
               setCakes(response.data.data)
           }, (error)=>{
               console.log("error ", error)
           })
    }

//},[]) //We want to prevent the call of componentdidupdate()
},[props.location.search])
    return (<div>
        <Carousel/>
      <div className="row">
        
        {cakes.length>0 && cakes.map((each,index)=>{
          return(<Card cake={each} key={index}/>)
        })}
      
     </div>
    </div>);
}

export default Home;