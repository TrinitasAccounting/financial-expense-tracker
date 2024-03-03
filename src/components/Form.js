
import { useState } from 'react';
import './Form.css'

function Form({ setTrans, handleAddTransaction }) {

    // const [transactionDate, setTransactionDate] = useState("")
    // const [transactionDescription, setTransactionDescription] = useState("")
    // const [transactionCatergory, setTransactionCategory] = useState("")
    // const [transactionAmount, setTransactionAmount] = useState("")

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    function handleCategoryChange(event) {
        setFormData({
            ...formData,
            category: event.target.value
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

        setFormData({
            date: "",
            description: "",
            category: "",
            amount: ""
        })
    }







    return (
        <form onSubmit={addATransaction}>
            <label htmlFor="date">Date</label>
            <input type="text" id="date" value={formData.date} onChange={handleChange} className="input" />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={formData.description} onChange={handleChange} className="input" />
            <label htmlFor="category">Category</label>
            {/* <input type="text" id="category" value={formData.category} onChange={handleChange} className="input" /> */}
            <select onChange={handleCategoryChange} className="select-category-box">
                <option value="Meals & Entertainment">Meals & Entertainment</option>
                <option value="Gas & Fuel">Gas & Fuel</option>
                <option value="Sales">Sales</option>
                <option value="Rent & Lease">Rent & Lease</option>
                <option value="Job Supplies">Job Supplies</option>
                <option value="Interest Expense">Interest Expense</option>
                <option value="Subscriptions">Subscriptions</option>
            </select>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" value={formData.amount} onChange={handleChange} className="input" />
            <button>Submit</button>
        </form>
    )
}



export default Form;
