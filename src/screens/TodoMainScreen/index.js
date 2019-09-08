import React from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';

import Header from '../../components/molecules/Header';
import TitleComponent from '../../components/molecules/TitleComponent';
import TodoHeader from '../../components/molecules/TodoHeader';
import TodoMainList from '../../components/molecules/HorizontalList';
import Clock from '../../components/clock';

import {
  setModalProperties,
  handleCheckbox,
  setSelectedList,
} from '../../store/actions';

import styles from './styles';

const TodoMainScreen = ({todoLists, dispatch, navigation, todoItems}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header leftIcon={'bars'} rightIcon={'user'} />
      </View>
      <View style={styles.titleContainer}>
        <TitleComponent textLarge={'Good Evening,'} nameText={'Jasbir Singh'} />
      </View>
      <View style={styles.clockContainer}>
        <Clock />
      </View>
      <View style={styles.listHeaderContainer}>
        <TodoHeader
          boldTodoTitleText={'Tasks'}
          todoTitleText="List"
          addListHandleClick={() =>
            dispatch(
              setModalProperties({
                isVisible: true,
                type: 'list',
              }),
            )
          }
        />
      </View>
      <View style={styles.listContainer}>
        <TodoMainList
          todoItems={todoItems}
          todoLists={todoLists}
          handleCheckbox={(todoIndex, todoListindex) =>
            dispatch(
              handleCheckbox({
                todoIndex,
                todoListindex,
              }),
            )
          }
          handleNewTodo={todoListindex =>
            dispatch(
              setModalProperties({
                isVisible: true,
                type: 'item',
                itemContext: todoListindex,
              }),
            )
          }
          handleTitleClick={todoListindex => {
            dispatch(setSelectedList(todoListindex));
            navigation.navigate('DetailsScreen');
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    todoLists: state.allTodos.get('allTodos').toJS(),
    todoItems: state.allTodoItems.toJS(),
  };
};

export default connect(mapStateToProps)(TodoMainScreen);
