import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function Chart({ color, unit, ...rest }) {
  return (
    <div>
      <Sparklines {...rest}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {Math.round(avg(rest.data))} {unit}
      </div>
    </div>
  );
}

function avg(data) {
  if (!Array.isArray(data)) return 0;
  return data && data.reduce((a, b) => a + b) / data.length;
}
export default Chart;
