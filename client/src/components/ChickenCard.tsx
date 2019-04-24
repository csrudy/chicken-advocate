import * as React from 'react';
import DataVis from './DataVis';

// individual card with store info

const ChickenCard = (props) => {
  let restaurantInfo = [];
  this.props.chickenList.forEach(element => {
    restaurantInfo.push(<div id={element._id} key={element._id}>{element.name}</div>)   
  });
  return (
    <React.Fragment>
      {restaurantInfo}
      <DataVis />
    </React.Fragment>
  )
}

export default ChickenCard;