import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import store from "../../store";
import './style.css'

@inject("store")
@observer
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTodo = (type) => {
    let { store } = this.props;
    switch (type) {
      case "add":
        store.addTodo("添加一条任务");
        break;
      case "delete":
        store.deleteTodo();
        break;
      case "reset":
        store.resetTodo();
        break;
      default:
    }
  };

  render() {
    let { store } = this.props;
    
    return (
      <div className="home">
        <h1>在React中使用mobx</h1>
        <div>{store.desc}</div>
        <button onClick={this.handleTodo.bind(this, "add")}>
          添加一条任务
        </button>
        <button onClick={this.handleTodo.bind(this, "delete")}>
          删除一条任务
        </button>
        <button onClick={this.handleTodo.bind(this, "reset")}>重置任务</button>
        {store.todoList.map((item, index) => {
          return <div key={Math.random()}>{item}</div>;
        })}
      </div>
    );
  }
}
