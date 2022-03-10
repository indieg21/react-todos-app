//

const initialState = {
    data: [],
  };
  
  const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          data: [...state.data, action.message],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          data: [...state.data.filter((todo) => todo.id !== action.id)], //filter will check the id from the action (remove it). The matching id will be removed.
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          data: [
            ...state.data.filter((todo) => todo.id !== action.id), //filter will go through element & the selected Id will be updated.
            { task: action.message, id: action.id },
          ],
        };
      default:
        return state;
    }
  };
  
  export default todos;