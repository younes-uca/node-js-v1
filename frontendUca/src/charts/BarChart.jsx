import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Reservations"],
    ["Janvier", 1000],
    ["Fevrier", 1170],
    ["Mars", 660,],
    ["Avril", 1030],
    ["Mai", 1170],
    ["Juin", 660],
    ["Juillet", 1030],
    ["Aout", 2000],
    ["Septembre", 1430],
    ["Octobre", 1230],
    ["Novembre", 1530],
    ["Decembre", 1660],

];

export const options = {
    chart: {
        title: "Reservation Performance",
        subtitle: "nombre de reservation par mois",
    },
    colors:["rgb(255, 89, 0)"]
};

export default function BarChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="350px"
            data={data}
            options={options}
        />
    );
}
