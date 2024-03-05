
import { Typography } from "@mui/material";
import PieChartExpenses from "./PieChartExpenses";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import RevenueChart from "./RevenueChart";

function Dashboard() {

    const { totalGasAndFuel, totalMealsAndEntertainment, trans } = useOutletContext();


    return (
        <div>
            <Typography variant="h1" style={{ marginTop: '50px', paddingBottom: '50px', color: '#343c63' }}>Financial KPI's Dashboard</Typography>
            <Typography variant='h5' style={{ position: 'absolute', left: '612px', top: '255px' }}>Expenses Breakdown</Typography>
            <PieChartExpenses trans={trans} totalGasAndFuel={totalGasAndFuel} totalMealsAndEntertainment={totalMealsAndEntertainment} />
            <div className="revenue-bar-chart">
                <RevenueChart trans={trans} />

            </div>


        </div>
    )
}

export default Dashboard;