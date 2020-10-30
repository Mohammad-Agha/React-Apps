import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";


// function App() {
//     return (
//         <div>
//             <Navbar />
//             <Main />
//             <Footer />
//         </div>
//     )
// }

// -------------------------
// class based components

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <Main />
//                 <Footer />
//             </div>
//         )
//     }
// }

// ----------------------------------
// Component life cycle 1
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//         this.componentDidMount() {
//             // Get the data that I need to correctly display
//             // E.g. API call
//         }
//         this.UNSAFE_componentWillReceiveProps(nextProps) {
//             if (nextProps.whatever !== this.props.whatever) {
//                 // do something 
//             }
//         }

//         this.shouldComponentUpdate(nextProps, nextState) {
//             // return true of you want to update something
//             // return false if not
//         }

//         this.componentWillUnmount() {
//             // cleanup something before the component disappears
//             // E.g remove some event listener
//         }


//     }
// }

//  ------------------------------------------------------------------------

// Component Life Cycle 2


export default App;