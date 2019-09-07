import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import allReducers from '../../store/Reducers';
import TodoMainScreen from '../TodoMainScreen';
import DetailsScreen from '../DetailsScreen';
import InputModalScreen from '../InputModalScreen';

import styles from './styles';

const store = createStore(allReducers);

const RootStack = createStackNavigator(
  {
    TodoMainScreen: TodoMainScreen,
    DetailsScreen: DetailsScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
const Navigation = createAppContainer(RootStack);

const MainParent = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainParentContainer}>
        <Navigation />
        <InputModalScreen />
      </View>
    </Provider>
  );
};

export default MainParent;
