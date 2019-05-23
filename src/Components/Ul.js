import React, { Component } from "react";

import Li from './Li'






class Ul extends Component {

  constructor(props) {
    super(props);

    
  

}






render() {










return (
<div>
<h1>{ this.props.header}</h1>





<ul className='list-group'>

{this.props.items.map((item,index)=>(
  <Li name={item.name} url={item.name}/>
)) 



  }


</ul>
</div>

  )



    
 }


}

export default Ul;
