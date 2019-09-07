import {StyleSheet} from 'react-native';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  inputView: {
    width: helperSizes.width - 100,
    backgroundColor: colors.white,
    padding: helperSizes.commonAppPadding,
  },
  inputViewHeader: {
    height: helperSizes.inputHeight,
  },
  actionButtonContainer: {
    height: helperSizes.inputHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: helperSizes.lesserPadding,
  },
  actionButtonText: {
    color: colors.greenText,
    margin: 10,
  },
});
export default styles;
