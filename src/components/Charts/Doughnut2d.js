import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy"
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, charts, FusionTheme)

const Doughnut2d = ({data}) => {
  // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Stars Per Language",
      subcaption: "Stars Rated Per Language by Users",
      showpercentvalues: "0",
      captionpadding: "0",
      decimals: "0",
      doughnutRadius: '45%',
      theme: "candy"
    },
    data, 
  };

  return <ReactFusioncharts
          type="doughnut2d"
          width="40%"
          height="500"
          dataFormat="JSON"
          dataSource={dataSource}
        />
};
export default Doughnut2d;
