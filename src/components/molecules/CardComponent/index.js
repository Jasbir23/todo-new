import React from 'react';
import {View} from 'react-native';

import CardTitle from '../CardTitle';
import CartTodo from '../CartTodoItem';

import styles from './styles';

const CardComponent = ({
  cardTitleText,
  todos,
  handleNewTodo,
  handleCheckbox,
  color,
  isRev,
  shadow,
  cardStyles,
  handleTitleClick,
}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {backgroundColor: color},
        shadow ? styles.shadow : {},
        cardStyles || {},
      ]}>
      <View style={styles.titleContainer}>
        <CardTitle
          isRev={isRev}
          cardTitleText={cardTitleText}
          handleNewTodo={handleNewTodo}
          handleTitleClick={handleTitleClick}
        />
      </View>
      <View style={styles.listContainer}>
        {todos.map((todo, todoIndex) => (
          <CartTodo
            isRev={isRev}
            handleCheckbox={() => handleCheckbox(todoIndex)}
            key={todoIndex}
            todoTitle={todo.title}
            isChecked={todo.isChecked}
          />
        ))}
      </View>
    </View>
  );
};

export default CardComponent;
