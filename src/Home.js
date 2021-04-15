
import Carousel from './Carousel'
import Card from './Card';
import cakes from './cakedata';
import {useState} from 'react';
function Home(){
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