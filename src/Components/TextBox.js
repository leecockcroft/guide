import React from 'react'


const TextBox=(props)=>{



return  <li className='list-group-item'> <a onClick={props.ClickHandler} href={props.url}> {props.name} </a></li>


}

export default TextBox


