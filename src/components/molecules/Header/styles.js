import {StyleSheet} from 'react-native';
import helperSizes from '../../../themes/helperSizes';

const styles = StyleSheet.create({
  genericHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
  },
});
export default styles;
