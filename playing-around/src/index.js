// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(what do i need to render, where do i want to render);
// We can't write two adjacent JSX elements beside each others we should wrap them in a containing element
// Way better from document.createElement("div") etc...
// ReactDOM.render(
//     <div>
//         <h1>Hello World!</h1>
//         <h2>Hello World</h2>
//     </div>, document.getElementById("root"));

// --------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//     <ul>
//         <li>Hello World 1</li>
//         <li>Hello World 2</li>
//         <li>Hello World 3</li>
//     </ul>, document.getElementById("root")
// )

// we won't write out whole application in the render function, imaging a web page of hundreds of elements in it, it will be impossible to maintain, solution-> functional components we create them by writing a function.

// --------------------------------------------------------

// FUNCTIONAL COMPONENTS


// import React from "react";
// import ReactDOM from "react-dom";

// function MyApp() {
//     return (
//         <ul>
//             <li>Hello World 11</li>
//             <li>Hello World 22</li>
//             <li>Hello World 33</li>
//         </ul>
//     )
// }

// ReactDOM.render(
//     <MyApp />
//     , document.getElementById("root")
// )

// import React from 'react';
// import ReactDOM from 'react-dom';

// function MyInfo() {
//     return (
//         <div style={{ color: 'red', backgroundColor: "#123", padding: '10px' }}>
//             <h1>Mohammad Agha</h1>
//             <p>My name is Mohammad Agha</p>
//             <ul>
//                 <li>Problem Solving</li>
//                 <li>Teaching</li>
//                 <li>Relentless Learner</li>
//             </ul>
//         </div >
//     )
// }

// ReactDOM.render(
//     <MyInfo />
//     , document.getElementById("root")
// )

// ---------------------------------------------------

// CALLING COMPONENTS FROM DIFFERENT FILES

// import React from "react";
// import ReactDOM from "react-dom";
// import MyInfo from "./components/MyInfo";

// ReactDOM.render(<MyInfo />, document.getElementById("root"));

// -----------------------------------------------------------

// Parent/child components

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));