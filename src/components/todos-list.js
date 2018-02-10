import React from 'react'
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

export default class TodosList extends React.Component {
    renderItems() {
        return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} />)
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
