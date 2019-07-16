import React from 'react';

const ResourceSelected = (props) => {
  console.log(props)
  return (
    <div>
    <h2>{props.elements.kind}</h2>
    <h1>{props.elements.title}</h1>
    <p>{props.elements.description}</p>
    <img src={props.elements.imageURL} alt="data"/>
    <span style={{margin:'auto', display:'block'}}>{props.elements.publishedDate}</span>
    </div>
  )
}

export default ResourceSelected;