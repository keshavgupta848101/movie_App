import React from 'react'
import './Style.css'

import '../App.css'

function Card(props){
    return(
  <div className="App">
    <div className="card" >
      <div className="card2" >
        <img src={props.img} alt="" className=""/>
            <div className="card_info" >
                  <span className="card_category">{props.category}</span>
                  <h3 className="card_title">{props.name}</h3>
                  {console.log(`${props.hrefLink} 32`)}
                  <a href={props.hrefLink} target="_blank" > 
                  <button>Watch Now</button>
                  </a>
            </div>
        </div>
    </div>
  </div> 
    )
  }

  export default Card