import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInput from '../../atoms/TextInput';

import styles from './styles';

class InputView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {},
      inputs: props.inputs,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.inputs !== prevState.inputs) {
      return {inputValues: {}, inputs: nextProps.inputs};
    }
    return null;
  }
  handleOnChange(inputKey, newText) {
    this.setState(prevState => ({
      inputValues: {
        ...prevState.inputValues,
        [inputKey]: newText,
      },
    }));
  }
  render() {
    const {style, header, handleCancelClick, handleAddClick} = this.props;
    return (
      <View style={[styles.inputView, style]}>
        <View style={styles.inputViewHeader}>
          <Text style={styles.inputViewHeaderText}>{header}</Text>
        </View>
        {this.state.inputs.map((inputItem, inputIndex) => (
          <TextInput
            key={inputIndex}
            placeHolder={inputItem.placeHolder}
            value={this.state.inputValues[inputItem.placeHolder]}
            onChange={newText =>
              this.handleOnChange(inputItem.placeHolder, newText)
            }
          />
        ))}
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity onPress={handleCancelClick}>
            <Text style={styles.actionButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAddClick(this.state.inputValues)}>
            <Text style={styles.actionButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default InputView;
