import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markDone = this.markDone.bind(this);
    this.update = this.update.bind(this);
  }

  addItem(item) {
    const newItem = { ...item, id: uuidv4(), isDone: false };
    this.setState(st => {
      return {
        list: [...st.list, newItem]
      };
    });
  }

  removeItem(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  }

  update(id, updatedTask) {
    const updatedList = this.state.list.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ list: updatedList });
  }

  markDone(id) {
    const updatedList = this.state.list.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    this.setState({ list: updatedList });
  }

  render() {
    const todos = this.state.list.map(todo => (
      <ToDo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        isDone={todo.isDone}
        removeItem={this.removeItem}
        markDone={this.markDone}
        update={this.update}
      />
    ));

    return (
      <div className='ToDoList'>
        <h1>
          Todo List! <span>A Simple React Todo List</span>
        </h1>
        <ul>{todos}</ul>
        <NewToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDoList;
