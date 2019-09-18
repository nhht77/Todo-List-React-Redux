import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

import {
  addTodo, toggleTodo, deleteTodo, changeFilter, editTitle, clearCompleted, toggleAll, ALL
} from './actions/todos'

class App extends Component {
  createTodo = ( title ) => {
    this.props.addTodo(title)
  }

  toggleTodo = ( id ) => {
    this.props.toggleTodo( id )
  }

  deleteTodo = ( id ) => {
    this.props.deleteTodo( id )
  }

  changeFilter = ( filter ) => {
    this.props.changeFilter( filter )
  }

  editTitle = ( id, title ) => {
    this.props.editTitle( id, title )
  }

  clearCompleted = () => {
    this.props.clearCompleted()
  }

  toggleAll = () => {
    this.props.toggleAll()
  }

  render() {
    const { todos: allTodos, currentFilter } = this.props
    const todos = allTodos.filter( todo =>
      currentFilter === ALL || todo.status === currentFilter
    )

    return (
      <div className="learn">
        <section className="todoapp">
          <Header addTodo={this.createTodo} />

          <TodoList todos={todos}
            editTitle={this.editTitle}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            toggleAll={this.toggleAll} />

          <Footer count={todos.length}
            clearCompleted={this.clearCompleted}
            currentFilter={currentFilter}
            changeFilter={this.changeFilter} />
        </section>
      </div>
    )
  }
}

const mapActionsToProps = {
  addTodo, toggleTodo, deleteTodo, changeFilter, editTitle, clearCompleted, toggleAll
}

export default connect( state => state, mapActionsToProps )( App )
