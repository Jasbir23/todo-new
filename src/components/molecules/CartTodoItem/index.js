import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WrapperContainer from '../../atoms/WrapperContainer';
import helperSizes from '../../../themes/helperSizes';
import fontSizes from '../../../themes/fontSizes';
import colors from '../../../themes/colors';

import styles from './styles';

const TodoItem = ({
  todoTitle,
  isChecked,
  handleCheckbox,
  isRev,
  isLarge,
  todoSubtitle,
}) => {
  return (
    <WrapperContainer
      style={[styles.cardTodoItem, {flex: isLarge ? 0.07 : 0.1}]}>
      <TouchableOpacity
        style={styles.checkBoxButton}
        onPress={() => handleCheckbox()}>
        <Icon
          name={isChecked ? 'check-square' : 'square-o'}
          size={isLarge ? fontSizes.large : helperSizes.checkBoxSize}
          color={isRev ? colors.white : colors.fontsPrimary}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          style={[
            styles.cardText,
            isChecked ? styles.lineThrough : {},
            {color: isRev ? colors.white : colors.fontsPrimary},
            {fontSize: isLarge ? fontSizes.medium : fontSizes.cardText},
          ]}>
          {todoTitle}
        </Text>
        {isLarge && !isChecked && todoSubtitle && todoSubtitle !== '' ? (
          <Text
            numberOfLines={1}
            style={[
              styles.cardText,
              {fontSize: fontSizes.cardText},
              {color: isRev ? colors.white : colors.fontsPrimary},
            ]}>
            {todoSubtitle}
          </Text>
        ) : null}
      </View>
    </WrapperContainer>
  );
};

export default TodoItem;
