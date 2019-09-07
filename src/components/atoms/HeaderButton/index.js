import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const HeaderButton = ({
  iconSize,
  iconName,
  iconColor,
  isFirst,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.headerButton,
        {alignItems: isFirst ? 'flex-start' : 'flex-end'},
      ]}
      onPress={() => handlePress && handlePress()}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default HeaderButton;
