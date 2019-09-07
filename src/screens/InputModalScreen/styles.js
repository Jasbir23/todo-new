import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import helperSizes from '../../themes/helperSizes';

const styles = StyleSheet.create({
  inputModalContainer: {
    height: helperSizes.height,
    width: helperSizes.width,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBg,
  },
});

export default styles;
