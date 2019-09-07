import {combineReducers} from 'redux';

import actionContants from '../actions/actionConstants';
import {getRandomColor} from '../../utils';

const color1 = getRandomColor();
const color2 = getRandomColor();
const initialTodos = [
  {
    title: 'Monday',
    todos: [
      {
        title: 'Do laundry',
        subTitle: 'Do laundry on time nkn nkn',
        isChecked: true,
      },
      {
        title: 'Do laundry',
        subTitle: 'Do laundry on time nkn nkn',
        isChecked: false,
      },
    ],
    color: color1.color,
    isRev: color1.isRev,
  },
  {
    title: 'Tuesday',
    todos: [
      {
        title: 'Do laundry',
        subTitle: 'Do laundry on time nkn nkn',
        isChecked: true,
      },
      {
        title: 'Do laundry',
        subTitle: 'Do laundry on time nkn nkn',
        isChecked: false,
      },
    ],
    color: color2.color,
    isRev: color2.isRev,
  },
];

function allTodos(
  state = {
    allTodos: initialTodos,
    selected: null,
  },
  action,
) {
  switch (action.type) {
    case actionContants.ADD_TODO_LIST: {
      const color = getRandomColor();
      const newTodo = {
        title: action.payload,
        todos: [],
        color: color.color,
        isRev: color.isRev,
      };
      return Object.assign({}, state, {
        allTodos: [...state.allTodos, newTodo],
      });
    }
    case actionContants.ADD_TODO_ITEM: {
      const newTodoItem = {
        title: action.payload.title,
        subTitle: action.payload.description,
        isChecked: false,
      };
      let todoArray = state.allTodos.slice();
      todoArray[action.payload.itemContext].todos.push(newTodoItem);
      return Object.assign({}, state, {
        allTodos: todoArray,
      });
    }
    case actionContants.HANDLE_CHECKBOX: {
      let todoArray = state.allTodos.slice();
      const {todoIndex, todoListindex} = action.payload;
      todoArray[todoListindex].todos[todoIndex].isChecked = !todoArray[
        todoListindex
      ].todos[todoIndex].isChecked;
      return Object.assign({}, state, {
        allTodos: todoArray,
      });
    }
    case actionContants.SET_SELECTED_LIST: {
      return Object.assign({}, state, {
        selected: action.payload,
      });
    }
    default:
      return state;
  }
}

// type can be list or item
function modalState(
  state = {
    isVisible: false,
    type: 'list',
  },
  action,
) {
  switch (action.type) {
    case actionContants.SET_MODAL_PROPERTIES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allTodos,
  modalState,
});
export default rootReducer;
