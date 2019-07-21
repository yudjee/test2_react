import { connect } from 'react-redux'
import { remove, add, edit, save } from './TodosReducer'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Todos from './Todos'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  remove: (todo) => remove(todo),
  add: (todo) => add(todo),
  edit: (index, text) => edit(index, text),
  save: (index, text) => save(index, text)
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
