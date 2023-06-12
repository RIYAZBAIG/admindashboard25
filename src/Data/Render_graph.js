
import React, { useEffect } from 'react';




function Render_graph({ viz_LineChart }) {

    console.log(viz_LineChart, "11")


  useEffect(() => {
    const renderChart = (chartData, chartId) => {
      const chartElement = document.getElementById(chartId);
      if (!chartElement) {
        console.error(`Could not find chart container with ID '${chartId}'.`);
        return;
      }
      chartData.renderToDOM(chartElement);
    };

    console.log(viz_LineChart, "1")
    if (viz_LineChart) {

        console.log(viz_LineChart, "3")
      renderChart(viz_LineChart, 'LineChart');

      console.log(viz_LineChart, "2")
    }
  }, [ viz_LineChart]);

//   console.log(viz, viz_Bubble, 'Render graph');

  return (
    <React.Fragment>
      {/* <div id="Mychart_2_1"></div> */}
      {/* <div id="Mychart_2_2"></div> */}
      {/* {viz_Bubble && <div id="Mychart_11_1"></div>} */}
      {/* <div id="Mychart_3_1"></div> */}
      {/* <div id="Mychart_3_2"></div> */}
      <div id="LineChart"></div>
      {/* <div id="Mychart_3_3"></div> */}
      
    </React.Fragment>
  );
}



export default Render_graph;