import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import jsonData from './file.json';
import Li from './Components/Li'
import Ul from './Components/Ul'
import style from './Components/Ul'
import ButtonAdd from './Components/ButtonAdd'

import CarouselTemplate from './Classes/CarouselTemplate'



class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      frontpage:[],
      ladbrokes:[],
      coral:[],
      lemini:[]


   }

  

}

componentDidMount=()=>{
 JSON.parse(JSON.stringify(jsonData));
 console.log(jsonData[0].frontpage)
 this.setState({
text:"s",
frontpage:jsonData[0].frontpage,
ladbrokes:jsonData[0].ladbrokes,
coral:jsonData[0].coral,
lemini:jsonData[0].lemini



 })
 
 }


addIcon=(e)=>{
  e.preventDefault();
  this.setState(prevState =>({
   frontpage:[
          ...this.state.frontpage,
        {
          name:this.state.text,
         


        }

      ]

}))

}


 onChange=(e)=>{

this.setState({

text:e.target.value


})



 }

    

  render() {






    return (




 <Router>
<div>





</div>
     <Route exact  path="/" render={ () => <Ul  items={this.state.frontpage} header="Home Page"/>}/>
     <Route exact  path="/ladbrokes" render={ () => <Ul items={this.state.ladbrokes} header="Ladbrokes" />}/>
      <Route exact  path="/coral" render={ () => <Ul  items={this.state.coral} header="Gemini"/>}/>
      <Route exact  path="/lemini" render={ () => <Ul  items={this.state.lemini} header="lemini"/>}/>


       <Route path="/carousels" component={CarouselTemplate} />

</Router>








    )
    
 }


}

export default App;
