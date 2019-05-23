
import React, { Component } from "react";

class TemplateBlock extends Component {
  
  constructor(props) {
    super(props);

  this.state={
  	isEditable:false,
  	newTitle:""



  }

  



}


editSection=(editboo,newTitle) => { 

this.setState({

isEditable:!this.state.isEditable


})


this.props.editChanges(this.state.isEditable,this.state.newTitle)

}

Changetext=(e)=>{

this.setState({

newTitle:e.target.value



})


console.log(this.state.newTitle)
}





render() {
 let textTrue;

    if (this.state.isEditable) {
      textTrue = (
        <input
          type="text"
          onChange={this.Changetext}
          
        
          className="uppercase"
        />
      );
    }






return (

	<div className="container">
	<li key={this.props.index}>	

		<hr/>

			<div className="row">
				<div className="col-sm-5 mt-5">

					<div className="step-info">
						<h1>{this.props.title} 	{textTrue}</h1>
						<p> {this.props.description} </p>
					</div>

					<div className="section2">
						<h3> Warning</h3>
						<p>If you drop it incorrectly you will find it at the bottom of the page</p>

							<div className="step-icon">
								<i className="fa">&#xf071;</i>
	            				<i className="fa" >&#xf0eb;</i>
	            				<i className="fa">&#xf074;</i>
	            				<i className="fa">&#xf0ad;</i>
            				</div>


					</div>


				</div>

			<div className="col-sm-5 ">
				<img src={this.props.image}/>
				<button onClick={this.editSection}>{this.state.isEditable ? "save" : "edit"}</button>
			</div>


		</div>
		</li>	

	</div>

)


}

}



export default TemplateBlock


