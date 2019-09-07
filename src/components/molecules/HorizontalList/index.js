import React from 'react';
import {ScrollView} from 'react-native';

import styles from './styles';

const TodoMainList = ({children}) => {
  return (
    <ScrollView horizontal={true} style={styles.listContainer} bounces={false}>
      {children}
    </ScrollView>
  );
};

export default TodoMainList;
