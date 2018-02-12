import React from 'react'
import TodosList from './todos-list'
import CreateTodo from './create-todo'

const todos = [
    { task: 'make React tutorial', isCompleted: false },
    { task: 'eat dinner', isCompleted: false }
]

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos
        }
    }

    render() {
      return (
          <div>
            <h1>React ToDos App</h1>
            <CreateTodo 
                   todos={this.state.todos} 
                   createTask={this.createTask.bind(this)}
            />
            <TodosList 
                todos={this.state.todos} 
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
            />
          </div>
      )
    }

    createTask(task) {
        const newTodo = {task, isCompleted: false}
        this.setState({ todos:[... this.state.todos, newTodo]})
    }

    toggleTask(task) {
      const todos = this.state.todos
          .map(todo => {
              if(todo.task === task) {
                return {task: todo.task, isCompleted: !todo.isCompleted}
              } else {
                return todo
              }
          })
      this.setState({todos})
    }

    saveTask(oldTask, newTask) {
      const todos = this.state.todos
          .map(todo => {
              if(todo.task === oldTask) {
                return {task: newTask, isCompleted: todo.isCompleted}
              } else {
                return todo
              }
          })
      this.setState({todos})
    }

    deleteTask(taskToDelete) {
        const todos = this.state.todos
            .filter(todo => todo.task !== taskToDelete)
        this.setState({todos})
    }
}
