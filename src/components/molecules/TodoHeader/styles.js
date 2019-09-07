import {StyleSheet} from 'react-native';
import fontSizes from '../../../themes/fontSizes';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: helperSizes.lesserPadding,
  },
  boldTodoTitle: {
    fontSize: fontSizes.semiTitle,
    fontWeight: 'bold',
    color: colors.fontsPrimary,
  },
  todoTitle: {
    fontSize: fontSizes.semiTitle,
    marginLeft: 3,
    color: colors.fontsPrimary,
  },
  textHolder: {
    flexDirection: 'row',
  },
  addButton: {
    height: helperSizes.addButtonSize,
    width: helperSizes.addButtonSize,
    backgroundColor: colors.addButton,
    borderRadius: helperSizes.addButtonRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
