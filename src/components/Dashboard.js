
import { Typography } from "@mui/material";
import PieChartExpenses from "./PieChartExpenses";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";

function Dashboard() {

    const { totalGasAndFuel, totalMealsAndEntertainment, trans } = useOutletContext();

    // console.log(totalGasAndFuel);
    // console.log(totalMealsAndEntertainment);

    return (
        <div>
            <Typography variant="h1">Testing this page out</Typography>
            <h1 className="">asdfffffffff</h1>
            <h2>Pleaseeeeeeee</h2>
            <PieChartExpenses trans={trans} totalGasAndFuel={totalGasAndFuel} totalMealsAndEntertainment={totalMealsAndEntertainment} />


        </div>
    )
}

export default Dashboard;