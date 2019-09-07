import actionContants from './actionConstants';

export function addTodoList(newListTitle) {
  return {
    type: actionContants.ADD_TODO_LIST,
    payload: newListTitle,
  };
}
export function addTodoItem(title, description, itemContext) {
  return {
    type: actionContants.ADD_TODO_ITEM,
    payload: {title, description, itemContext},
  };
}

export const setModalProperties = modalProperties => {
  return {
    type: actionContants.SET_MODAL_PROPERTIES,
    payload: modalProperties,
  };
};
export const handleCheckbox = checkboxId => {
  return {
    type: actionContants.HANDLE_CHECKBOX,
    payload: checkboxId,
  };
};
export const setSelectedList = listId => {
  return {
    type: actionContants.SET_SELECTED_LIST,
    payload: listId,
  };
};
