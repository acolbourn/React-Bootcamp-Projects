import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleRemove(e) {
    this.props.removeItem(this.props.id);
  }

  handleClick(e) {
    this.props.markDone(this.props.id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ ...this.state, isEditing: false });
  }

  toggleForm(e) {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='ToDo'>
          <form className='ToDo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='ToDo'>
          <li
            className={this.props.isDone ? 'ToDo-task completed' : 'ToDo-task'}
            onClick={this.handleClick}
          >
            {this.state.task}
          </li>
          <div className='ToDo-buttons'>
            <button onClick={this.toggleForm}>
              <i className='fas fa-pen'></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default ToDo;
