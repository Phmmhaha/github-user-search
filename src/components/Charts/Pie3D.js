import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';

const Pie3D = ({data}) => {
  charts(FusionCharts);
  const dataSource = {
    chart: {
      caption: "Languages",
      subcaption: "Languages used by github users",
      showvalues: "1",
      showpercentintooltip: "0",
      showpercentvalues: "1",
      enablemultislicing: "1",
      pieRadius: "50%",
      theme: "fusion"
    },
    data,

  };
  return<ReactFusioncharts
          type="pie3d"
          width="40%"
          height="500"
          dataFormat="JSON"
          dataSource={dataSource}
        />
  
}
export default Pie3D;

