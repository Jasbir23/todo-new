import React from 'react';
import {View, PanResponder, FlatList} from 'react-native';

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
      todoItems1,
      todoItems2,
      navigation,
      dispatch,
    } = this.props;
    const panResponder = this._panResponder;
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
          <LargeCardComponent
            dispatch={dispatch}
            todoList={selectedTodoPrimary}
            todoItems={todoItems1}
          />
        </View>
        {selectedTodoSecondary.id !== selectedTodoPrimary.id ? (
          <View
            style={[
              styles.cardContainer2,
              {transform: [{translateY: this.state.lowerCardYPos}]},
            ]}>
            <LargeCardComponent
              dispatch={dispatch}
              todoList={selectedTodoSecondary}
              todoItems={todoItems2}
              panResponder={panResponder}
            />
          </View>
        ) : (
          <View style={styles.cardContainer2} />
        )}
      </View>
    );
  }
}

const LargeCardComponent = ({todoList, dispatch, panResponder, todoItems}) => (
  <LargeCard
    selectedTodoList={todoList.todos}
    todoItems={todoItems}
    panResponder={panResponder}
    handleNewTodo={() =>
      dispatch(
        setModalProperties({
          isVisible: true,
          type: 'item',
          itemContext: todoList.id,
        }),
      )
    }
    handleCheckbox={todoIndex =>
      dispatch(
        handleCheckbox({
          todoIndex,
          todoListindex: todoList.id,
        }),
      )
    }
  />
);

const LargeCard = ({
  selectedTodoList,
  handleNewTodo,
  handleCheckbox,
  panResponder,
  todoItems,
}) => {
  const panHandlers = panResponder ? panResponder.panHandlers : {};
  return (
    <View
      style={[styles.largeCard1, {backgroundColor: selectedTodoList.color}]}>
      <View style={styles.todoHeader} {...panHandlers}>
        <CardTitle
          isLarge={true}
          cardTitleText={selectedTodoList.title}
          handleNewTodo={handleNewTodo}
          isRev={selectedTodoList.isRev}
        />
      </View>
      <View style={styles.todoList}>
        <FlatList
          style={styles.bigList}
          data={todoItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) =>
            renderTodoItem(item, index, handleCheckbox, selectedTodoList.isRev)
          }
          bounces={false}
        />
      </View>
    </View>
  );
};

const renderTodoItem = (todo, todoIndex, handleCheckbox, isRev) => (
  <TodoItem
    isLarge={true}
    isRev={isRev}
    handleCheckbox={() => handleCheckbox && handleCheckbox(todoIndex)}
    key={todoIndex}
    todoTitle={todo.title}
    isChecked={todo.isChecked}
    todoSubtitle={todo.subTitle}
  />
);
const mapStateToProps = state => {
  const index1 = state.allTodos.get('selected');
  let index2 =
    index1 >= state.allTodos.get('allTodos').size - 1 ? 0 : index1 + 1;
  const todoItems1 = state.allTodoItems.get(`todoList${index1}`);
  const todoItems2 = state.allTodoItems.get(`todoList${index2}`);
  return {
    selectedTodoPrimary: {
      todos: state.allTodos.getIn(['allTodos', index1]).toJS(),
      id: index1,
    },
    todoItems1: todoItems1 ? todoItems1.toJS() : [],
    selectedTodoSecondary: {
      todos: state.allTodos.getIn(['allTodos', index2]).toJS(),
      id: index2,
    },
    todoItems2: todoItems2 ? todoItems2.toJS() : [],
  };
};

export default connect(mapStateToProps)(DetailsScreen);
