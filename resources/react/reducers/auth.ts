const INITIAL_STATE: any = [];

const todos = (state: [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo: any) => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    default:
      return INITIAL_STATE;
  }
};

export default todos;
