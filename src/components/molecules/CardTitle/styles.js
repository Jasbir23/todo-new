import {StyleSheet} from 'react-native';
import fontSizes from '../../../themes/fontSizes';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: helperSizes.lesserPadding,
  },
  cardTitleText: {
    fontSize: fontSizes.cardTitle,
    color: colors.fontsPrimary,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 0.9,
  },
  addButton: {
    height: helperSizes.addButtonSize,
    width: helperSizes.addButtonSize,
    borderRadius: helperSizes.addButtonRadius,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
export default styles;
