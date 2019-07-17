import React from 'react';

const ResourceSelected = (props) => {
  return (
    <div>
    <h2>{props.elements.kind}</h2>
    <h1>{props.elements.title}</h1>
    <img src={props.elements.imageURL} alt="data"/>
    </div>
  )
}

export default ResourceSelected;