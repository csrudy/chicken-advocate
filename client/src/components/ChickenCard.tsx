import * as React from 'react';
import DataVis from './DataVis';

// individual card with store info

const ChickenCard = ({name, address1, address2, price, image, zip_code, rating}) => {
  return (
    <React.Fragment>
      <div className='card'>
        <div>
          <img className='card-image' alt='card' src={image} />
        </div>
        <div className='card-details'>
          <h3>{name}</h3>
          <p>{address1}, {address2}, {zip_code}</p><br />
          <p>{price}</p><br />
          <p>{rating}</p><br />
        </div>
      </div>
      <DataVis />
    </React.Fragment>
  )
}

export default ChickenCard;