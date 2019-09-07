import React from 'react';
import {View, PanResponder} from 'react-native';

import Header from '../../components/molecules/Header';
import CardTitle from '../../components/molecules/CardTitle';
import TodoItem from '../../components/molecules/CartTodoItem';
import {connect} from 'react-redux';

import {setModalProperties, handleCheckbox} from '../../store/actions';
import styles from './styles';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerCardYPos: 0,
    };
    this.prevDy = 0;
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (e, gestureState) => {
        const {dx, dy} = gestureState;

        return Math.abs(dx) > 1 || Math.abs(dy) > 1;
      },
      onPanResponderMove: (evt, gestureState) => {
        const dy = gestureState.dy - this.prevDy;
        if (
          this.state.lowerCardYPos + dy < -261 ||
          this.state.lowerCardYPos + dy > 170
        )
          return;
        this.setState(prevState => ({
          lowerCardYPos: prevState.lowerCardYPos + dy,
        }));
        this.prevDy = gestureState.dy;
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.prevDy = 0;
      },
    });
  }
  render() {
    const {
      selectedTodoPrimary,
      selectedTodoSecondary,
      navigation,
      dispatch,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            handlePress={() => navigation.goBack()}
            leftIcon={'chevron-left'}
            rightIcon={'user'}
          />
        </View>
        <View style={styles.cardContainer}>
          <LargeCard
            selectedTodoList={selectedTodoPrimary.todos}
            handleNewTodo={() =>
              dispatch(
                setModalProperties({
                  isVisible: true,
                  type: 'item',
                  itemContext: selectedTodoPrimary.id,
                }),
              )
            }
            handleCheckbox={todoIndex =>
              dispatch(
                handleCheckbox({
                  todoIndex,
                  todoListindex: selectedTodoPrimary.id,
                }),
              )
            }
          />
        </View>
        <View
          style={[
            styles.cardContainer2,
            {transform: [{translateY: this.state.lowerCardYPos}]},
          ]}
          {...this._panResponder.panHandlers}>
          <LargeCard
            selectedTodoList={selectedTodoSecondary.todos}
            handleNewTodo={() =>
              dispatch(
                setModalProperties({
                  isVisible: true,
                  type: 'item',
                  itemContext: selectedTodoSecondary.id,
                }),
              )
            }
            handleCheckbox={todoIndex =>
              dispatch(
                handleCheckbox({
                  todoIndex,
                  todoListindex: selectedTodoSecondary.id,
                }),
              )
            }
          />
        </View>
      </View>
    );
  }
}

const LargeCard = ({selectedTodoList, handleNewTodo, handleCheckbox}) => {
  return (
    <View
      style={[styles.largeCard1, {backgroundColor: selectedTodoList.color}]}>
      <View style={styles.todoHeader}>
        <CardTitle
          isLarge={true}
          cardTitleText={selectedTodoList.title}
          handleNewTodo={handleNewTodo}
          isRev={selectedTodoList.isRev}
        />
      </View>
      <View style={styles.todoList}>
        {selectedTodoList.todos.map((todo, todoIndex) => (
          <TodoItem
            isLarge={true}
            isRev={selectedTodoList.isRev}
            handleCheckbox={() => handleCheckbox && handleCheckbox(todoIndex)}
            key={todoIndex}
            todoTitle={todo.title}
            isChecked={todo.isChecked}
            todoSubtitle={todo.subTitle}
          />
        ))}
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  const index1 = state.allTodos.selected;
  const index2 = index1 >= state.allTodos.allTodos.length - 1 ? 0 : index1 + 1;
  return {
    selectedTodoPrimary: {todos: state.allTodos.allTodos[index1], id: index1},
    selectedTodoSecondary: {todos: state.allTodos.allTodos[index2], id: index2},
  };
};

export default connect(mapStateToProps)(DetailsScreen);
