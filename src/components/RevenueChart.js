
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './RevenueChart.css';

const chartSetting = {
    xAxis: [
        {
            label: 'Sales Revenue ($)',
        },
    ],
    width: 650,
    height: 400,
};
// const dataset = [
//     {
//         revenue: 21,
//         month: 'Jan',
//     },
//     {
//         revenue: 28,
//         month: 'Feb',
//     },
//     {
//         revenue: 41,
//         month: 'Mar',
//     },
//     {
//         revenue: 0,
//         month: 'Apr',
//     },
//     {
//         revenue: 0,
//         month: 'May',
//     },
//     {
//         revenue: 0,
//         month: 'June',
//     },
//     {
//         revenue: 0,
//         month: 'July',
//     },
//     {
//         revenue: 0,
//         month: 'Aug',
//     },
//     {
//         revenue: 0,
//         month: 'Sept',
//     },
//     {
//         revenue: 0,
//         month: 'Oct',
//     },
//     {
//         revenue: 0,
//         month: 'Nov',
//     },
//     {
//         revenue: 0,
//         month: 'Dec',
//     },
// ];

const valueFormatter = (value) => `$${value}`;

export default function RevenueChart({ trans }) {



    // const revenueForMarch = trans.filter((trans) => {
    //     return (trans.category === 'Sales' && trans.date[0] === '3')
    // })

    let totalJanRevenue = 0;
    let totalFebRevenue = 0;
    let totalMarRevenue = 0;
    let totalAprRevenue = 0;
    let totalMayRevenue = 0;
    let totalJunRevenue = 0;
    let totalJulRevenue = 0;
    let totalAugRevenue = 0;
    let totalSepRevenue = 0;
    let totalOctRevenue = 0;
    let totalNovRevenue = 0;
    let totalDecRevenue = 0;
    const revenueTotalCalculations = trans.map((trans) => {
        if (trans.category === 'Sales' && trans.date[0] === '3') {
            totalMarRevenue = Number(totalMarRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '2') {
            totalFebRevenue = Number(totalFebRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '1') {
            totalJanRevenue = Number(totalJanRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '4') {
            totalAprRevenue = Number(totalAprRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '5') {
            totalMayRevenue = Number(totalMayRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '6') {
            totalJunRevenue = Number(totalJunRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '7') {
            totalJulRevenue = Number(totalJulRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '8') {
            totalAugRevenue = Number(totalAugRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '9') {
            totalSepRevenue = Number(totalSepRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '10') {
            totalOctRevenue = Number(totalOctRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '11') {
            totalNovRevenue = Number(totalNovRevenue) + Number(trans.amount)
        }
        else if (trans.category === 'Sales' && trans.date[0] === '12') {
            totalDecRevenue = Number(totalDecRevenue) + Number(trans.amount)
        }
    })

    // console.log(totalMarRevenue);
    // console.log(totalFebRevenue);
    // console.log(totalJanRevenue);




    const dataset = [
        {
            revenue: totalJanRevenue,
            month: 'Jan',
        },
        {
            revenue: totalFebRevenue,
            month: 'Feb',
        },
        {
            revenue: totalMarRevenue,
            month: 'Mar',
        },
        {
            revenue: totalAprRevenue,
            month: 'Apr',
        },
        {
            revenue: totalMayRevenue,
            month: 'May',
        },
        {
            revenue: totalJunRevenue,
            month: 'June',
        },
        {
            revenue: totalJulRevenue,
            month: 'July',
        },
        {
            revenue: totalAugRevenue,
            month: 'Aug',
        },
        {
            revenue: totalSepRevenue,
            month: 'Sept',
        },
        {
            revenue: totalOctRevenue,
            month: 'Oct',
        },
        {
            revenue: totalNovRevenue,
            month: 'Nov',
        },
        {
            revenue: totalDecRevenue,
            month: 'Dec',
        },
    ];








    return (
        <div className="revenue-bar-chart">
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'revenue', label: 'Monthly Revenue for 2024', valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
            />
        </div>
    );
}