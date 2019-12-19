import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export const addTodo = description => {
  return {
    type: ADD_TODO,
    payload: description
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};
