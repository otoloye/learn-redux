import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './actions/todo';

function App({ todos, addTodo }) {
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    const todoInput = e.target.value;
    setTodo(todoInput);
  };

  const handleClick = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleClick}>
          <input type="text" value={todo} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>TodoList</p>
      {todos.map(todo => (
        <p key={todo}>{todo}</p>
      ))}
    </div>
  );
}

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
