const initialState = {
    todos: [],
    filter: 'ALL'
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  