const initialState = {
    todos: [],
  };
  
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload.text,
            },
          ],
        };
      default:
        return state;
    }
};
  
export default todoReducer;
  