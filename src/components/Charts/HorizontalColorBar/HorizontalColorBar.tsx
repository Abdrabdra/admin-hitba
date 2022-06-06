import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { COLORS_ORDER } from "../../../constants";
import { IHomePart } from "../../../pages/Home/HomeSection/HomeSection.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  count: number;
  barData: IHomePart[];
}

const HorizontalColorBar: FC<Props> = ({ count, barData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  barData = barData.filter((e) => e.value != null);

  let color: number = -1;

  const handleColor = () => {
    color++;
  };

  useEffect(() => {
    setChartData({
      labels: barData.map((e) => {
        return e.value;
      }),

      datasets: [
        {
          //@ts-ignore
          label: "Статистика по возрасту",
          //@ts-ignore
          data: barData.map((row) => {
            return row.count;
          }),

          //@ts-ignore
          backgroundColor: barData.map((row) => {
            handleColor();
            return COLORS_ORDER[color];
          }),
          //@ts-ignore
          borderRadius: 10,
          //@ts-ignore
          barThickness: 15,
        },
      ],
    });
    setChartOptions({
      indexAxis: "y" as const,
      responsive: true,
      scales: {
        display: false,
        x: {
          display: false,
          ticks: {
            callback: function (value: any, index: any, ticks: any) {
              return "- " + value + "%";
            },
          },
          title: {
            color: "#2398AB", // not working color
          },
        },
      },
      elements: {
        bar: {
          borderHeight: 2,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default HorizontalColorBar;
