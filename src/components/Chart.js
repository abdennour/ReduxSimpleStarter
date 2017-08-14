import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Chart({ color, ...rest }) {
  return (
    <Sparklines {...rest}>
      <SparklinesLine color={color} />
    </Sparklines>
  );
}
export default Chart;
