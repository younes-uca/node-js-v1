import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Adherents"],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 660],
    ["2016", 1030],
];

export const options = {
    title: "Adherent Performance",
    colors:["red"],
    isStacked: true,
    height: 400,
    legend: { position: "1000", maxLines: 3 },
    vAxis: { minValue: 0 },
};

export function AreaChart() {
    return (
        <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
