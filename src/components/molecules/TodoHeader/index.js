import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WrapperContainer from '../../atoms/WrapperContainer';

import styles from './styles';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const TodoHeader = ({boldTodoTitleText, todoTitleText, addListHandleClick}) => {
  return (
    <WrapperContainer style={styles.todoHeader}>
      <View style={styles.textHolder}>
        <Text style={styles.boldTodoTitle}>{boldTodoTitleText}</Text>
        <Text style={styles.todoTitle}>{todoTitleText}</Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addListHandleClick()}>
        <Icon
          name={'plus'}
          size={helperSizes.addIconSize}
          color={colors.addIconColor}
        />
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default TodoHeader;
