import {
  ADD_TODO, TOGGLE_TODO, DELETE_TODO, CHANGE_FILTER, EDIT_TITLE, CLEAR_COMPLETED, TOGGLE_ALL, ACTIVE
} from '../actions/todos'

import toggleTodo from './toggleTodo'
import deleteTodo from './deleteTodo'
import changeFilter from './changeFilter'
import editTitle from './editTitle'
import clearCompleted from './clearCompleted'
import toggleAll from './toggleAll'

const root = (state, action) => {
  const { todos, nextId } = state;
  const { title } = action;

  switch( action.type ) {
    case ADD_TODO:
      return {
        ...state,
        nextId: nextId + 1,
        todos: [...todos, { id: nextId, title, status: ACTIVE }]
      }
    case TOGGLE_TODO:
      return toggleTodo( state, action )
    case DELETE_TODO:
      return deleteTodo( state, action )
    case CHANGE_FILTER:
      return changeFilter( state, action )
    case EDIT_TITLE:
      return editTitle( state, action )
    case CLEAR_COMPLETED:
      return clearCompleted( state, action )
    case TOGGLE_ALL:
      return toggleAll( state, action )
    default:
      return state
  }
}

export default root
