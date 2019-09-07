import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const WrapperContainer = ({children, style}) => {
  return <View style={[styles.wrapperContainer, style]}>{children}</View>;
};

export default WrapperContainer;
