import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {connect} from 'react-redux';

import InputView from '../../components/molecules/InputView';

import {
  setModalProperties,
  addTodoList,
  addTodoItem,
} from '../../store/actions';

import styles from './styles';

import helperSizes from '../../themes/helperSizes';

const listInputs = [
  {
    placeHolder: 'List Name',
  },
];
const itemInputs = [
  {
    placeHolder: 'Todo Name',
  },
  {
    placeHolder: 'Todo Description',
  },
];

const InputModal = ({style, isVisible, type, dispatch, itemContext}) => {
  return (
    <KeyboardAvoidingView
      style={[
        styles.inputModalContainer,
        style,
        {
          transform: [{scale: isVisible ? 1 : 0}],
        },
        Platform.OS === 'android'
          ? {top: isVisible ? 0 : 2 * helperSizes.height}
          : {},
      ]}
      behavior="padding"
      enabled>
      <InputView
        handleAddClick={inputValues => {
          if (type === 'list') {
            inputValues[listInputs[0].placeHolder] &&
              inputValues[listInputs[0].placeHolder] !== '' &&
              dispatch(addTodoList(inputValues[listInputs[0].placeHolder]));
          } else {
            inputValues[itemInputs[0].placeHolder] &&
              inputValues[itemInputs[0].placeHolder] !== '' &&
              dispatch(
                addTodoItem(
                  inputValues[itemInputs[0].placeHolder],
                  inputValues[itemInputs[1].placeHolder],
                  itemContext,
                ),
              );
          }
          dispatch(
            setModalProperties({
              isVisible: false,
            }),
          );
        }}
        handleCancelClick={() =>
          dispatch(
            setModalProperties({
              isVisible: false,
            }),
          )
        }
        header={'ADD TODO'}
        inputs={type === 'list' ? listInputs : itemInputs}
      />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.modalState.isVisible,
    type: state.modalState.type,
    itemContext: state.modalState.itemContext,
  };
};

export default connect(mapStateToProps)(InputModal);
