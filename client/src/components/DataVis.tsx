// import * as React from "react";
// import { useState } from "react";
// import { CircularGridLines, RadialChart } from 'react-vis';

// visualises user input (flavor, spiciness, etc) using a react-vis radial 
// http://uber.github.io/react-vis/examples/showcases/radial
// https://github.com/uber/react-vis/tree/master/showcase/radial-chart

import * as React from 'react';
import { useState } from "react";
import { RadialChart } from 'react-vis';

const DataVis = ({avg_spice, avg_crunch, avg_flavor, avg_temp, avg_size}) => {
  const [hoverState, setHoverState] = useState(false);

  const DATA = [
    {
      label: 'Flavor',
      angle: 1,
      id: 1,
      radius: parseFloat(avg_flavor),
    },
    {
      label: 'Spiciness',
      angle: 2,
      id: 2,
      radius: parseFloat(avg_spice),
    },
    {
      label: 'Crunchiness',
      angle: 5,
      id: 3,
      radius: parseFloat(avg_crunch),
    },
    {
      label: 'Temperature',
      angle: 3,
      id: 4,
      radius: parseFloat(avg_temp),
    },
    {
      label: 'Size',
      angle: 5,
      id: 5,
      radius: parseFloat(avg_size),
    }
  ];
  
  function mapData(hoveredSection) {
    return DATA.map((row, index) => {
      console.log(row);
      return {
        ...row,
        innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
        opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6,
      };
    });
  }

    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoverState)}
        labelsAboveChildren
        labelsRadiusMultiplier={1.4}
        onValueMouseOver={row => setHoverState(row.id)}
        onMouseLeave={() => setHoverState(false)}
        width={175}
        height={175}
      >
      </RadialChart>
    );
}

export default DataVis;