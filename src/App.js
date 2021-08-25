//import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      todos: [{
        id: 1,
        item: "Fold Laundry",
        done: false,
        className: ""
      },{
        id: 2,
        item: "Wash Dishes",
        done: false,
      className: ""
      }]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value});
  }

  addTodo = (e) => {
    if(this.state.userInput !== "") {
      let newTodo={id: Date.now(), item:this.state.userInput, done:false}
      const newTodos = [...this.state.todos];
      newTodos.push(newTodo);
      this.setState({todos:newTodos});
      this.setState({userInput:""})

    }
  }

   handleClick = (e) => {
     console.log("todos: ", this.state.todos);
    let newTodos = this.state.todos;
    console.log("target element", e);
    console.log("target id ", e.target.id);
    newTodos[e.target.id].done = !newTodos[e.target.id].done; 

    if(newTodos[e.target.id].done){
      newTodos[e.target.id].className="is-done";
    }
    else{
      newTodos[e.target.id].className=null;
    }
    this.setState({todos: newTodos});
    
    console.log("updated todos: ", this.state.todos);
 }

      render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                        <input id="todo-item" onChange={this.handleChange} value= {this.state.userInput}/>
                        <button onClick={this.addTodo}>Add Todo</button>
                        <ul>
                          {this.state.todos.map((todo) => {
                            return(
                              <li id={this.state.todos.indexOf(todo)} key={this.state.todos.indexOf(todo)} className={todo.className} onClick={this.handleClick} >{todo.item}</li>
                          )})}
                        </ul>

                    </h2>
                </div>
                <style>{`
                    .is-done {
                      text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}
