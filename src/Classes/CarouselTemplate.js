import React, { Component } from "react";
import ReactDOM from 'react-dom'


import jsonData from '../template.json';
import TemplateBlock from '../Components/TemplateBlock'
import ButtonAdd from '../Components/ButtonAdd'
import add_dates from '../images/ladbrokes/dualLinks/add_dates.png'

import createNew from '../images/ladbrokes/dualLinks/createNew.png'







class CarouselTemplate extends Component {
  
  constructor(props) {
    super(props);

    this.state={

      carousel:[],
      textBox:false


    }

  

}

/*componentDidMount=()=>{
 JSON.parse(JSON.stringify(jsonData));
console.log(jsonData[0].carousel)
 this.setState({
carousel:jsonData[0].carousel


 })
 
 }

*/

changeText=(e)=>{

this.setState({

titleText:e.target.value



})

}



textBox=(e)=>{

 this.setState({

descriptionText:e.target.value



})



}


save=(e)=>{

e.preventDefault();

this.setState({

carousel:[
      
       ...this.state.carousel,
        {
          title:this.state.titleText,
          description:"test",
          img:<input type="file"/>

        }

      


]



})




}



 onChange=(e)=>{

this.setState({

text:e.target.value


})



 }




editChanges=(editboo,newTitle,indexToChange )=>{
console.log(newTitle)
this.setState({

  carousel:this.state.carousel.map((item,index)=>{

                if(index===indexToChange){

                  return {

                    ...item,
                    title:newTitle
                  }

                }


                  return item
          })



  




})

}


    

  render() {




    return (

        <div>
          <ButtonAdd onChange={this.onChange} add={this.save}/>

     <ul className='list-group'>
        {this.state.carousel.map((item,index)=>(
         <TemplateBlock key={index} title={item.title} image={item.img}  description={item.description} edit={'edit'} editChanges={ (editboo,newTitle)=> this.editChanges(editboo,newTitle,index)} />
        )) 



  }


       
        </ul>

        </div>







    )
    
 }



}

export default CarouselTemplate;
