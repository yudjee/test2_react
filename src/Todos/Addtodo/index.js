import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {

	state = {
		todo: '',
    uniq: true
	};

	onAddTodo = (e) => {
    this.setState({
      todo: e.target.value
    })
    this.uniqCheck()
  };

  uniqCheck = () => {
    for(let i=0; i < this.props.todos.length; i++) {
        this.state.todo.toLowerCase().indexOf(this.props.todos[i].text.toLowerCase()) >= 0 ? this.setState({uniq: false}) : this.setState({uniq: true})
      }
    console.log(this.state)
  }

  onSubmit = (todo) => {
    if(this.state.uniq == true){
      this.props.add(todo);
      this.setState({
        todo: '',
        uniq: true
      })
    }
  }

  render() {
  	return (
      <div>
    		<div className='input-group'>
      			<input 
    		  		type='text' 
    		  		className='form-control' 
    		  		placeholder='Write something' 
    		  		value={this.state.todo}
    		  		onChange={this.onAddTodo} />
    			<div className='input-group-append'>
    				<button className='btn btn-outline-secondary' 
    					onClick={() => this.onSubmit(this.state.todo)}>
              Add
            </button>
    			</div>    
    		</div>
        {this.state.uniq ? null : <div className="font-italic text-danger">Please add uniq todo.</div>}
      </div>
  	)
  }
}

AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default AddTodo