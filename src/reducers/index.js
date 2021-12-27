import { Add_Task, Remove_Task } from "../actions/actiontypes";

const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Add_Task:
      const newTodoList = [...state.todos, { ...action.payload }];

      return {
        ...state,
        todos: newTodoList.sort((a, b) =>
          a["priority"] > b["priority"] ? 1 : -1
        ),
      };
    case Remove_Task:
      const removeTodoList = state.todos.filter(
        (task) => task.id !== action.payload
      );

      return {
        ...state,
        removeTodoList,
      };

    default:
      return { ...state };
  }
}
