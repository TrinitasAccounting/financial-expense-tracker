import logo from './logo.svg';
import './App.css';
import { Typography, CssBaseline } from '@mui/material'

import ResponsiveDrawer from './components/ResponsiveDrawer';
import TransactionsList from './components/TransactionList';
import Temporary from './components/Dashboard';

import NavBar from './components/NavBar';

import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [transactionsList, setTransactionsList] = useState([]);



  // //Mapping over the initial transactions array
  // const mappedTransactionsList = transactionList.map((transaction) => {
  //   return transaction
  // })

  // console.log(mappedTransactionsList);











  //Choosing Category Information, State, and Effects
  const [categ, setCateg] = useState(789);

  const categorySelection = (event) => {
    setCateg(event.target.value);
  };

  // console.log(categ)


  //Adding to the transactions list____________________________________________________
  // function addATransaction(event, data) {
  //   event.preventDefault();
  //   fetch(`http://localhost:3000/transactions`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }


  function handleAddTransaction(newTransaction) {
    const newTransactionArray = [...transactionsList, newTransaction];
    setTransactionsList(newTransactionArray)
  }

  // console.log(transactionsList)




  //____________________________________________________

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => setTransactionsList((transactionsList) => data))
    // console.log(transactionsList)
  }, []);

  // console.log(transactionsList)




  //Mapping over the initial transactions array____________________________________________
  const mappedTransactionsList = transactionsList.map((transaction) => {
    return transaction
  })

  // console.log(mappedTransactionsList);








  //Using Reduce to calculate our expense totals________________________________________________________

  const totalMealsAndEntertainment = mappedTransactionsList.filter((transaction) => {
    return (transaction.category === "Meals & Entertainment")
  })

  // console.log(totalMealsAndEntertainment);



  const totalGasAndFuel = mappedTransactionsList.filter((transaction) => {
    return (transaction.category === "Gas & Fuel")
  })

  // console.log(totalGasAndFuel);

















  // const renderedTransactionList = transactionsList.map((transaction) => {
  //   return transaction;
  // })

  // // console.log(renderedTransactionList);




  return (
    <div className="App">
      <ResponsiveDrawer />
      {/* <NavBar /> */}

      {/* <h1>Hello World!</h1> */}
      <Typography variant="h3">Hello World!</Typography>
      {/* <NavBar /> */}
      <Outlet context={{
        trans: mappedTransactionsList,
        setTrans: setTransactionsList,
        handleAddTransaction: handleAddTransaction,
        categ: categ,
        categorySelection: categorySelection,
        totalGasAndFuel: totalGasAndFuel,
        totalMealsAndEntertainment: totalMealsAndEntertainment
      }} />
    </div>
  );
}

export default App;
