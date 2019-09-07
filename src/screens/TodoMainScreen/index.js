import React from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';

import Header from '../../components/molecules/Header';
import TitleComponent from '../../components/molecules/TitleComponent';
import TodoHeader from '../../components/molecules/TodoHeader';
import TodoMainList from '../../components/molecules/HorizontalList';
import CardComponent from '../../components/molecules/CardComponent';
import Clock from '../../components/clock';

import {
  setModalProperties,
  handleCheckbox,
  setSelectedList,
} from '../../store/actions';

import styles from './styles';

const TodoMainScreen = ({todoLists, dispatch, navigation}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Header leftIcon={'bars'} rightIcon={'user'} />
    </View>
    <View style={styles.titleContainer}>
      <TitleComponent textLarge={'Good Evening,'} nameText={'Jasbir Singh'} />
    </View>
    <View style={styles.clockContainer}>
      <Clock date={new Date()} />
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
      <TodoMainList>
        {todoLists.map((todoList, todoListindex) => (
          <CardComponent
            handleCheckbox={todoIndex =>
              dispatch(
                handleCheckbox({
                  todoIndex,
                  todoListindex,
                }),
              )
            }
            handleNewTodo={() =>
              dispatch(
                setModalProperties({
                  isVisible: true,
                  type: 'item',
                  itemContext: todoListindex,
                }),
              )
            }
            handleTitleClick={() => {
              dispatch(setSelectedList(todoListindex));
              navigation.navigate('DetailsScreen');
            }}
            key={todoListindex}
            cardTitleText={todoList.title}
            todos={todoList.todos}
            color={todoList.color}
            isRev={todoList.isRev}
            shadow={true}
          />
        ))}
      </TodoMainList>
    </View>
  </View>
);

const mapStateToProps = state => {
  return {
    todoLists: state.allTodos.allTodos,
  };
};

export default connect(mapStateToProps)(TodoMainScreen);
