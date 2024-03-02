import logo from './logo.svg';
import './App.css';
import { Typography, CssBaseline } from '@mui/material'

import ResponsiveDrawer from './components/ResponsiveDrawer';
import TransactionsList from './components/TransactionList';
import Temporary from './components/Temporary';

import NavBar from './components/NavBar';

import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      {/* <NavBar /> */}

      {/* <h1>Hello World!</h1> */}
      <Typography variant="h3">Hello World!</Typography>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
