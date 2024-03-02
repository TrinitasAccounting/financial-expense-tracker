
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import { PieChart } from '@mui/material';

import './PieChartExpenses.css'


export default function PieChartExpenses({ toatGasAndFuel, totalMealsAndEntertainment, trans }) {

    console.log(trans);

    let totalExpensesMealsAndEntertainment = 0;
    let totalExpensesGasAndFuel = 0;
    let totalExpensesRentAndLease = 0;

    const expenseTotalCalculations = trans.map((expense) => {
        if (expense.category === "Meals & Entertainment") {
            totalExpensesMealsAndEntertainment = Number(totalExpensesMealsAndEntertainment) + Number(expense.amount)
        }
        else if (expense.category === "Gas & Fuel") {
            totalExpensesGasAndFuel = Number(totalExpensesGasAndFuel) + Number(expense.amount)
        }
        else if (expense.category === "Rent & Lease") {
            totalExpensesRentAndLease = Number(totalExpensesRentAndLease) + Number(expense.amount)
        }

    })

    console.log(totalExpensesMealsAndEntertainment);
    console.log(totalExpensesGasAndFuel);

    const data = [
        { id: 0, value: totalExpensesGasAndFuel, label: 'Gas & Fuel' },
        { id: 1, value: totalExpensesMealsAndEntertainment, label: 'Meals & Entertainment' },
        { id: 2, value: totalExpensesRentAndLease, label: 'Rent & Lease' },
    ];




    return (
        <div className="pie-chart-expenses">
            <PieChart
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
            />
        </div>
    );
}