import React from "react"
import TodoItem from "./TodoItem"
import "./style.css"
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItemComponent = this.state.todos.map(
      todo => <TodoItem handleChange={this.handleChange} key={todo.id} item={todo} />
    )
    return (
      <div className="todo-list">
        {todoItemComponent}
      </div>
    )
  }
}

export default App

// Showing a spinner Loading before data come from api 

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//       person: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     });
//     fetch("https://jsonplaceholder.typicode.com/todos/2")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           loading: false,
//           person: data
//         });
//       });
//   }

//   render() {
//     return <div>{this.state.loading ? "Loading..." : this.state.person.id}</div>;
//   }
// }

// -----------------------------------------
// Form control 1

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: ""
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <form action="">
//         <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
//         <br />
//         <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//       </form>
//     )
//   }
// }
// export default App;


