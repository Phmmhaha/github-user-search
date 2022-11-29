import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, charts, FusionTheme)

const Bar3D = ({data}) => {
  //  Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: " forks",
      yaxisname: "forks",
      xaxisname: "repos",
      yaxisnamefontsize: "16px",
      xaxisnamefontsize: "16px",
      showvalues: "1",
      theme: "candy"
    },
    data,
  };
  return <ReactFusioncharts
      type="bar3d"
      width="49%"
      height="500"
      dataFormat="JSON"
      dataSource={dataSource}
    />
}
export default Bar3D;

