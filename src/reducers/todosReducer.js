import { initialState } from './initialState';
import { ADD_TODO } from '../actions/actionTypes';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) };
    default: {
      return state;
    }
  }
};
