import {combineReducers} from 'redux';
import Immutable from 'immutable';

import actionContants from '../actions/actionConstants';
import {getRandomColor} from '../../utils';

const color1 = getRandomColor();

let initialTodos = new Immutable.List();
let todos1 = new Immutable.List();
todos1 = todos1.push(
  new Immutable.Map({
    title: 'Do laundry',
    subTitle: 'Do laundry on time',
    isChecked: false,
    id: 'todoItem0',
  }),
);

const todoList = new Immutable.Map({
  title: 'Tuesday',
  color: color1.color,
  isRev: color1.isRev,
  id: 'todoList0',
});
initialTodos = initialTodos.push(todoList);

function allTodoItems(
  state = new Immutable.Map({
    todoList0: todos1,
  }),
  action,
) {
  switch (action.type) {
    case actionContants.ADD_TODO_ITEM: {
      const {itemContext, title, description} = action.payload;
      return state.update(`todoList${itemContext}`, todos => {
        const itemObj = {
          title: title,
          subTitle: description,
          isChecked: false,
          id: 'todoItem' + ((todos && todos.size) || 0),
        };
        if (todos) {
          const newTodoItem = new Immutable.Map(itemObj);
          return todos.push(newTodoItem);
        } else return new Immutable.List([itemObj]);
      });
    }
    case actionContants.HANDLE_CHECKBOX: {
      const {todoIndex, todoListindex} = action.payload;
      return state.updateIn(
        [`todoList${todoListindex}`, todoIndex, 'isChecked'],
        checkBox => !checkBox,
      );
    }
    default:
      return state;
  }
}

function allTodos(
  state = new Immutable.Map({
    allTodos: initialTodos,
    selected: null,
  }),
  action,
) {
  switch (action.type) {
    case actionContants.ADD_TODO_LIST: {
      const color = getRandomColor();
      const newList = new Immutable.Map({
        title: action.payload,
        color: color.color,
        isRev: color.isRev,
        id: 'todoList' + state.get('allTodos').size,
      });
      return state.update('allTodos', allTodos => allTodos.push(newList));
    }
    case actionContants.SET_SELECTED_LIST: {
      return state.set('selected', action.payload);
    }
    default:
      return state;
  }
}

// type can be list or item
function modalState(
  state = new Immutable.Map({
    isVisible: false,
    type: 'list',
    itemContext: 0,
  }),
  action,
) {
  switch (action.type) {
    case actionContants.SET_MODAL_PROPERTIES:
      return new Immutable.Map(action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allTodos,
  modalState,
  allTodoItems,
});
export default rootReducer;
