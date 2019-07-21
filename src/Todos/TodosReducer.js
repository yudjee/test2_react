// ------------------------------------
// Constants
// ------------------------------------
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_REMOVE = 'TODOS_REMOVE'
export const TODOS_EDIT = 'TODOS_EDIT'
export const TODOS_SAVE = 'TODOS_SAVE'

// ------------------------------------
// Actions
// ------------------------------------
export function add (todo = '') {
  return {
    type: TODOS_ADD,
    payload: todo
  }
}

export function remove (todo) {
  return {
    type: TODOS_REMOVE,
    payload: todo
  }
}

export function edit (index, text) {
  return {
    type: TODOS_EDIT,
    index,
    text
  }
}

export function save (index, text) {
  return {
    type: TODOS_SAVE,
    index,
    text
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TODOS_ADD]: (state, action) => [...state, {text: action.payload, isEdit: false}],
  [TODOS_REMOVE]: (state, action) => state.filter(t => t.text !== action.payload.text),
  [TODOS_EDIT]: (state, action) => {
    console.log(action)
    
    const newState = [];
    state.forEach((todo, index) => {
      index === action.index - 1 ?
        newState.push({text: todo.text, isEdit: true}): 
        newState.push(todo)
    })
    return newState
  },
  [TODOS_SAVE]: (state, action) => {
    const newState = [];
    state.forEach((todo, index) => {
      index === action.index ?
        newState.push({text: action.text, isEdit: false}): 
        newState.push(todo)
    })
    
    return newState
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [
  {text: 'Buy milk', isEdit: false},
  {text: 'Do exercises', isEdit: false}, 
  {text: 'Cook dinner', isEdit: false}
]

export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
