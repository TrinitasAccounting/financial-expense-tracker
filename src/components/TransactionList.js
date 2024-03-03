

import { Typography } from "@mui/material";
import { useOutletContext, Outlet } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
import TableSimple from "./TableSimple";
import './TableSimple.css';
import './TransactionList.css';
import TableNewTest from './TableNewTest';


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

    // console.log(renderedTransactionList2);

    return (
        <div>
            {/* <Typography variant="h1">Transactions</Typography> */}
            {/* <h1>Testinggggggggggggggggggggggg</h1> */}
            {/* <form>
                <input />
                <input />
            </form> */}
            <Typography variant='h4' style={{ marginTop: '50px' }}>Add New Transactions</Typography>
            <div className='form-transaction-add'>
                <Form setTrans={setTrans} handleAddTransaction={handleAddTransaction} />
            </div>
            {/* <div className='transactions-table'>
                <TableSimple className="table-simple" trans={trans} />
            </div> */}
            <div className="transactions-table">
                <TableNewTest trans={trans} />
            </div>
            {/* <Table trans={renderedTransactionList2} setTrans={setTrans} categ={categ} categorySelection={categorySelection} /> */}
            {/* {transactionsToShow} */}


        </div>
    )
}

export default TransactionsList;