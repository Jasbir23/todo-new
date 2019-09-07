import {StyleSheet} from 'react-native';
import fontSizes from '../../../themes/fontSizes';
import colors from '../../../themes/colors';
import helperSizes from '../../../themes/helperSizes';

const styles = StyleSheet.create({
  textInput: {
    fontSize: fontSizes.cardText,
    color: colors.inputColor,
    marginTop: 5,
    height: helperSizes.inputHeight,
  },
});
export default styles;
