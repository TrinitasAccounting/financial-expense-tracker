
import { useState } from 'react';

function Form({ setTrans, handleAddTransaction }) {

    // const [transactionDate, setTransactionDate] = useState("")
    // const [transactionDescription, setTransactionDescription] = useState("")
    // const [transactionCatergory, setTransactionCategory] = useState("")
    // const [transactionAmount, setTransactionAmount] = useState("")

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: null
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    // console.log(formData);

    function addATransaction(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/transactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => handleAddTransaction(data))
    }







    return (
        <form onSubmit={addATransaction}>
            <label for="date">Date</label>
            <input type="text" id="date" value={formData.date} onChange={handleChange} />
            <label for="description">Description</label>
            <input type="text" id="description" value={formData.description} onChange={handleChange} />
            <label for="category">Category</label>
            <input type="text" id="category" value={formData.category} onChange={handleChange} />
            <label for="amount">Amount</label>
            <input type="text" id="amount" value={formData.amount} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Form;
