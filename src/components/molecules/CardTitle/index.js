import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WrapperContainer from '../../atoms/WrapperContainer';

import styles from './styles';
import helperSizes from '../../../themes/helperSizes';
import fontSizes from '../../../themes/fontSizes';
import colors from '../../../themes/colors';

const CardHeader = ({
  cardTitleText,
  handleNewTodo,
  isRev,
  isLarge,
  handleTitleClick,
}) => {
  return (
    <WrapperContainer style={styles.cardHeader}>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            handleTitleClick && handleTitleClick();
          }}>
          <Text
            numberOfLines={1}
            style={[
              styles.cardTitleText,
              {fontSize: isLarge ? fontSizes.semiTitle : null},
              {color: isRev ? colors.white : colors.fontsPrimary},
            ]}>
            {cardTitleText}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleNewTodo()}>
        <Icon
          name={'plus'}
          size={isLarge ? fontSizes.large : helperSizes.addIconSize}
          color={isRev ? colors.white : colors.fontsSecondary}
        />
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default CardHeader;
