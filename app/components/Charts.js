"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { sortTime } from "../utils/dateSort";
import { formatDateFromUnixTimestamp } from "../utils/dateFormatter";

export default function Charts({ prices }) {
  echarts.registerTheme("my_theme", {
    backgroundColor: "black",
  });

  let option = {
    dataZoom: [
      {
        id: "dataZoomX",
        type: "slider",
        xAxisIndex: [0],
        filterMode: "filter",
      },
    ],
    xAxis: {
      data: sortTime(prices).map((item) =>
        formatDateFromUnixTimestamp(item[0])
      ),
    },
    yAxis: {},
    series: [
      {
        data: prices.map((item) => item[1]),
        type: "line",
        stack: "x",
        areaStyle: {},
      },
    ],
  };
  return (
    <ReactECharts
      style={{ height: "400px", width: "100%" }}
      option={option}
      lazyUpdate={true}
      theme={"dark"}
      notMerge={true}
    />
  );
}
