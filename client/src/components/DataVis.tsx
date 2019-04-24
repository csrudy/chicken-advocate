import * as React from "react";
import { useState } from "react";
import { CircularGridLines, RadialChart } from 'react-vis';

// visualises user input (flavor, spiciness, etc) using a react-vis radial 
// http://uber.github.io/react-vis/examples/showcases/radial
// https://github.com/uber/react-vis/tree/master/showcase/radial-chart

// crunch, spice, flavor, temp, size, overall
// display as a radial chart

const DataVis = (props) => {
  const [hoverState, setHoverState] = useState(false);
  const DATA = [
    {
      angle: 1,
      id: 1,
      radius: 10
    },
    {
      angle: 2,
      label: 'Super Custom label',
      subLabel: 'With annotation',
      id: 2,
      radius: 20
    },
    {
      angle: 5,
      id: 3,
      radius: 5,
      label: 'Alt Label'
    },
    {
      angle: 3,
      id: 4,
      radius: 14
    },
    {
      angle: 5,
      id: 5,
      radius: 12,
      subLabel: 'Sub Label only'
    }
  ];
  
  function mapData(hoverState) {
    return DATA.map((row, index) => {
      return {
        ...row,
        innerRadius: hoverState === index + 1 ? row.radius - 1 : null,
        opacity: !hoverState || hoverState === index + 1 ? 1 : 0.6
      };
    });
  }  

  return (
    <div className="radial-wrapper" onMouseOver={(data) => setHoverState(!hoverState)}>
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoverState)}
        labelsAboveChildren
        onValueMouseOver={row => setHoverState(row.id)}
        onMouseLeave={() => setHoverState(false)}
        width={600}
        height={300}>
        <CircularGridLines tickTotal={20} rRange={[0, 150]} />
      </RadialChart>
    </div>
  )
};

export default DataVis;