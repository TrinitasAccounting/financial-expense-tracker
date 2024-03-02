

import { Typography } from "@mui/material";
import { useOutletContext, Outlet } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";


function TransactionsList() {

    const { trans, setTrans, categ, categorySelection, handleAddTransaction } = useOutletContext();

    // console.log(categ);

    // console.log(trans);

    // const transactionsToShow = trans.map((transaction) => {
    //     return (
    //         <div>
    //             <h1 key={transaction.id}>{transaction.description}</h1>
    //         </div>
    //     )
    // })


    const renderedTransactionList2 = trans.map((transaction) => {
        return transaction;
    })

    console.log(renderedTransactionList2);

    return (
        <div>
            {/* <Typography variant="h1">Transactions</Typography> */}
            {/* <h1>Testinggggggggggggggggggggggg</h1> */}
            {/* <form>
                <input />
                <input />
            </form> */}
            <Form setTrans={setTrans} handleAddTransaction={handleAddTransaction} />
            <Table trans={renderedTransactionList2} categ={categ} categorySelection={categorySelection} />
            {/* {transactionsToShow} */}


        </div>
    )
}

export default TransactionsList;