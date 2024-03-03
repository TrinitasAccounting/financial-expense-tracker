


function TableNewTest({ trans }) {

    const rowsOfTransactions = trans.map((transaction) => {
        return (
            <tbody key={transaction.id}>
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
            </tbody>
        )
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>

            {rowsOfTransactions}
        </table >
    )
}

export default TableNewTest;