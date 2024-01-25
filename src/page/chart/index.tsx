import React, { Component, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./index.module.css";

const initialData = [1, 2, 3, 4, 5, 4, 3]; // 초기 데이터

const ChartPage = () => {
  const [dataSeries, setDataSeries] = useState([...initialData]);

  useEffect(() => {
    const interval = setInterval(() => {
      // 새로운 데이터 포인트 생성 (예: 무작위 데이터)
      const newDataPoint = Math.floor(Math.random() * 10);
      // 현재 데이터 배열에서 마지막 요소를 제거하고 새로운 데이터 포인트를 추가
      const newDataSeries = [...dataSeries.slice(1), newDataPoint];
      // 상태 업데이트
      setDataSeries(newDataSeries);
    }, 5000);

    // 컴포넌트가 언마운트될 때 인터벌 클리어
    return () => clearInterval(interval);
  }, [dataSeries]);

  const options = {
    chart: {
      type: "areaspline",
      height: 400,
      backgroundColor: "#06060C",
      opacity: 0.75,
    },
    title: {
      text: "",
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        data: dataSeries,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className={styles.root}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartPage;
