import React from 'react'
import PropTypes from 'prop-types'

import AddTodo from './Addtodo'

/*export const Todos = ({ todos, remove, add }) => {
  let todo = '';
  console.log('')
  const onTodoChange = (e) => {
    console.log(e.target.value)
    return todo = e.target.value
  }
  return (
    <div style={{ margin: '0 auto', maxWidth: '400px' }} >
      <h2>Todos:</h2>
      { todos.length >= 1 ? 
            <ul className='list-group list-group-flush'>
            {
              todos.map((t, idx) => (
                <li key={t} className='list-group-item d-flex justify-content-between align-items-center'>
                  {++idx}. {t}
                  <button className='close' onClick={() => remove(t)}>
                    <span >&times;</span>
                  </button>
                </li>
              ))
            }
            </ul> :
            <h4 className="text-success">Congrats! You did it!</h4>
          }

      <br />
      <div className='input-group'>
        <input 
          type='text' 
          className='form-control' 
          placeholder='Write something' 
          value={todo}
          onChange={onTodoChange} />
        <div className='input-group-append'>
          <button className='btn btn-outline-secondary' onClick={() => alert('Not implemented!')}>Add</button>
        </div>
      </div>
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
}

export default Todos*/

class Todos extends React.Component {

  state = {

  };

  onChangeTodo = (e) => {
    this.setState({
      changedTodo: e.target.value
    })
  }

  onSave= (index, changedTodo) => {
    this.props.save(index, changedTodo);
     this.setState({
      
    })
  }

    render() {

      const { todos, remove, add, edit } = this.props
      return (
        <div style={{ margin: '0 auto', maxWidth: '400px' }} >
          <h2>Todos:</h2>
          { todos.length >= 1 ? 
                <ul className='list-group list-group-flush'>
                {
                  todos.map((todo, idx) => (
                    <li key={todo.text} className='list-group-item d-flex justify-content-between align-items-center'>
                      { todo.isEdit ?
                        <input type='text' className='form-control' 
                          value={this.state.changedTodo || todo.text}
                          onChange={this.onChangeTodo}/> :
                        <span onClick={() => edit(idx, todo.text)}>{++idx}. {todo.text}</span>
                      }

                      { todo.isEdit ?
                        <button className='btn btn-success'
                          onClick={() => this.onSave(idx, this.state.changedTodo || todo.text)}>Save</button> :
                        <button className='close' onClick={() => remove(todo)}>
                          <span >&times;</span>
                        </button>
                      }
                    </li>
                  ))
                }
                </ul> :
                <h4 className="text-success">Congrats! You did it!</h4>
              }

          <br />

          <AddTodo add={add} todos={todos}/>
        </div>
      )
  };
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
}

export default Todos