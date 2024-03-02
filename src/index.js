import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TransactionsList from './components/TransactionList';
import RevenueDashboard from './components/RevenueDashboard';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/transactions",
                element: <TransactionsList />
            },
            {
                path: "/revenue",
                element: <RevenueDashboard />
            }
        ]
    }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// const myFirstElement = <h1>Testing</h1>


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
