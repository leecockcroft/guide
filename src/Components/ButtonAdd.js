import React from 'react'


const ButtonAdd=(props)=>{



return  <form onSubmit={props.add}>
	<input type='text'  onChange={props.onChange}/>


<button className={props.class}>Add </button> </form>


		


}

export default ButtonAdd


