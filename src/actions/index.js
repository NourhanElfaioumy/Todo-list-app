import { Add_Task, Remove_Task } from "./actiontypes";

export const add_task = (data) => {
  return function (dispatch) {
    dispatch({ type: Add_Task, payload: data });
  };
};

export const remove_task = (id) => {
  return function (dispatch) {
    dispatch({ type: Remove_Task, payload: id });
  };
};
