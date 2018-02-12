import React from 'react'
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

export default class TodosList extends React.Component {
    renderItems() {
      
        const _props = excludeTodos(this.props) 

        return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} {..._props} />)
    }

    render() {
      return (
         <table>
            <TodosListHeader />
            <tbody>
                {this.renderItems()}
            </tbody>
         </table>
      )
    }
}

const excludeTodos = (props) => Object.keys(props)
        .filter(propName => propName !== 'todos')
        .reduce(appendProperty(props), {}) 

const appendProperty = (props) => (object, propName) => {
    object[propName] = props[propName]; return object
}

