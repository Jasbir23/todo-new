import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const LargeTitleText = ({text}) => {
  return <Text style={styles.largeTitleText}>{text}</Text>;
};

export default LargeTitleText;
