import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, charts, FusionTheme)

const Column3D = ({ data }) =>{
    // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Most Popular Languages",
      subcaption: "Languages used by github users in 2020",
      yaxisname: "Stars",
      xaxisname: "repos",
      yaxisnamefontsize: "16px",
      xaxisnamefontsize: "16px",
      decimals: "1",
      theme: "gammel"
    },
    data,
  };
  return <ReactFusioncharts
          type="column3d"
          width="49%"
          height="500"
          dataFormat="JSON"
          dataSource={dataSource}
        />
}
export default Column3D;