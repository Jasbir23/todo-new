import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const SmallTitleText = ({text}) => {
  return <Text style={styles.smallTitleText}>{text}</Text>;
};

export default SmallTitleText;
