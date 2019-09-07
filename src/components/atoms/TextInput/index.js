import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';
import colors from '../../../themes/colors';

const InputModal = ({placeHolder, value, onChange}) => {
  return (
    <TextInput
      style={[styles.textInput]}
      placeholderTextColor={colors.inputColor}
      placeholder={placeHolder}
      value={value}
      onChangeText={text => onChange(text)}></TextInput>
  );
};

export default InputModal;
