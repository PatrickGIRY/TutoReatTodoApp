import React from 'react'

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null
        }
    }

    renderError() {
        if (!this.state.error) { return null }

        return <div style={{color: 'red'}}>{this.state.error}</div>
    }

    render() {
      return (
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="what do I need to do?" ref="createInput" />
            <button>Create</button>
            {this.renderError()}
          </form>
      )
    }

    handleCreate(event) {
        event.preventDefault()
        
        const task = this.refs.createInput.value
        const validateInput = this.validateInput(task)

        if(validateInput) {
            this.setState({error: validateInput})
        } else {
            this.setState({error: null})
            this.props.createTask(task)
            this.refs.createInput.value=''
        }
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
        } else if (this.props.todos.some(todo => todo.task === task)) {
            return 'Task already exists'
        } else {
            return null
        }
    }
}
