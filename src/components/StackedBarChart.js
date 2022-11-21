import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Refer the high charts "https://www.highcharts.com/demo/bar-basic" for more information

const StackedBarChart = (props) => {
  const config = {
    chart: {
      type: "bar",
    },
    title: {
      text: props.title,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "issues: <b>{point.y} </b>",
    },
    plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
    series: [
      {
        name: props.title,
        data: props.created_issues,
        
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      
      {
        name: props.title,
        data:props.closed_issues,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#000",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={config}
        ></HighchartsReact>
      </div>
    </div>
  );
};

export default StackedBarChart;
