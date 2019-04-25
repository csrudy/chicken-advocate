import * as React from 'react';
import DataVis from './DataVis';

// individual card with store info

const ChickenCard = ({name, address1, address2, price, image_url, zip_code, city, avg_spice, avg_crunch, avg_flavor, avg_temp, avg_size, overall_avg}) => {
  return (
      <div className='card'>
        <div>
          <img className='card-image' alt='card' src={image_url} />
        </div>
        <div className='card-details'>
          <h3>{name}</h3>
          <p>{address1}, {(address2) ? address2 + ',' : ''} {city} {zip_code}</p>
          {(price) ? <p>Price: {price}</p> : ''}
          <p>Overall Rating: {parseFloat(overall_avg).toFixed(1)}</p>
        </div>
          <DataVis {...{avg_spice, avg_crunch, avg_flavor, avg_temp, avg_size}}/>
      </div>
  )
}

export default ChickenCard;