import {StyleSheet} from 'react-native';
import fontSizes from '../../../themes/fontSizes';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  cardTodoItem: {
    flex: 0.1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: helperSizes.cardItemMarginTop,
  },
  cardText: {
    fontSize: fontSizes.cardText,
    color: colors.fontsPrimary,
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  checkBoxButton: {
    flex: 0.2,
    alignItems: 'center',
    paddingTop: 2,
  },
});
export default styles;
