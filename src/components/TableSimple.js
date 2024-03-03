// // Filename - App.js

// import React, { Component } from "react";
// import './TableSimple.css'
// import { Description } from "@mui/icons-material";
// import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

// class TableSimple extends Component {


//     render() {

//         // const newArray = this.props.trans.map((transaction) => {
//         //     console.log(transaction);
//         // })

//         // console.log(Object.values(this.props.trans));

//         const newBodyArray = this.props.trans.map((transaction) => {
//             return ([transaction.date, transaction.description, transaction.category, transaction.amount]);
//         })

//         // console.log(newBodyArray);

//         let heading = ["Date", "Description", "Category", "Amount"];
//         let body = [...newBodyArray];

//         // console.log(this.props.trans);

//         return (
//             <div className="table-simple">
//                 <Table heading={heading} body={body} />,
//             </div>
//         );
//     }
// }

// class Table extends Component {
//     render() {
//         let heading = this.props.heading;
//         let body = this.props.body;
//         return (
//             <table style={{ width: 500 }}>
//                 <thead>
//                     <tr >
//                         {heading.map((head, headID) => (
//                             <th key={headID}>{head}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {body.map((rowContent, rowID) => (
//                         <>
//                             <TableRow
//                                 rowContent={rowContent}
//                                 key={rowID}
//                             />
//                             {/* <button>Delete</button> */}
//                         </>
//                     ))}
//                 </tbody>
//             </table>
//         );
//     }
// }

// class TableRow extends Component {
//     render() {
//         let row = this.props.rowContent;
//         return (
//             <tr>
//                 {row.map((val, rowID) => (
//                     <>
//                         <td key={rowID}>{val}</td>
//                         {/* <button>Delete</button> */}
//                     </>
//                 ))}
//             </tr>
//         );
//     }
// }

// export default TableSimple;