import { useState, useMemo, useEffect } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = ['Hp', 'Attack', 'Defense', 'Special-attack', 'Special-defense', 'Speed',];

const options = {
    responsive: true,
    scales: {
        y: {
            min: 0,
            max: 100
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }
}

export default function Graphics({ stats }) {

    const [dataAbility, setDataAbility] = useState([]);




    useEffect(() => {
        setDataAbility([]);

        stats.forEach(stat => {
            setDataAbility(dataP => [...dataP, stat.base_stat])
        });
        // stats.map(stat => {
        //     setDataAbility(dataP => [...dataP, stat.base_stat])
        // })
    }, [stats]);

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: 'Mis datos',
                    data: dataAbility,
                    tension: 0.5
                },
            ],
            labels
        };
    }, [])

    return <Line data={data} options={options} />
}



