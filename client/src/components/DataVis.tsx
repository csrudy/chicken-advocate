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
  const names = ['', 'Flavor', 'Spiciness', 'Crunchiness', 'Temperature', 'Size'];
  const DATA = [
    {
      // 'Flavor'
      angle: 10,
      id: 1,
      radius: parseFloat(avg_flavor),
    },
    {
      // 'Spiciness'
      angle: 6,
      id: 2,
      radius: parseFloat(avg_spice),
    },
    {
      // 'Crunchiness'
      angle: 8,
      id: 3,
      radius: parseFloat(avg_crunch),
    },
    {
      // 'Temperature'
      angle: 5,
      id: 4,
      radius: parseFloat(avg_temp),
    },
    {
      // 'Size'
      angle: 5,
      id: 5,
      radius: parseFloat(avg_size),
    }
  ];
  
  function mapData(hoveredSection) {
    return DATA.map((row, index) => {
      return {
        ...row,
        innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
        opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6,
        label: hoveredSection === index + 1 ? `${names[row.id]} ${row.radius.toFixed(1)}` : '',
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
        labelsRadiusMultiplier={1}
        onValueMouseOver={row => setHoverState(row.id)}
        onMouseLeave={() => setHoverState(false)}
        width={175}
        height={175}
      >
      </RadialChart>
    );
}

export default DataVis;