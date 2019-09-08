import React from 'react';
import {FlatList} from 'react-native';
import CardComponent from '../CardComponent';

import styles from './styles';

const TodoMainList = ({
  todoItems,
  todoLists,
  handleCheckbox,
  handleNewTodo,
  handleTitleClick,
}) => (
  <FlatList
    data={todoLists}
    keyExtractor={item => item.id.toString()}
    renderItem={({item, index}) =>
      returnTodoList(
        item,
        index,
        handleCheckbox,
        handleNewTodo,
        handleTitleClick,
        todoItems[item.id],
      )
    }
    horizontal={true}
    style={styles.listContainer}
    bounces={false}
  />
);

const returnTodoList = (
  todoList,
  todoListindex,
  handleCheckbox,
  handleNewTodo,
  handleTitleClick,
  todos,
) => (
  <CardComponent
    handleCheckbox={todoIndex => handleCheckbox(todoIndex, todoListindex)}
    handleNewTodo={() => handleNewTodo(todoListindex)}
    handleTitleClick={() => handleTitleClick(todoListindex)}
    key={todoListindex}
    cardTitleText={todoList.title}
    todos={todos}
    color={todoList.color}
    isRev={todoList.isRev}
    shadow={true}
  />
);

export default TodoMainList;
