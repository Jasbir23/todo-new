import {StyleSheet} from 'react-native';
// import fontSizes from '../../themes/fontSizes';
import helperSizes from '../../themes/helperSizes';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    overflow: 'hidden',
  },
  headerContainer: {
    flex: 1,
  },
  cardContainer: {
    flex: 5.75,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardContainer2: {
    flex: 5.75,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  largeCard1: {
    height: helperSizes.height,
    width: helperSizes.width + 100,
    borderRadius: helperSizes.bigCardRadius,
    transform: [{translateX: -50}, {translateY: 20}],
    backgroundColor: 'white',
    paddingLeft: 100,
  },
  todoHeader: {
    flex: 1,
    marginLeft: 20,
  },
  todoList: {
    flex: 12,
    justifyContent: 'flex-start',
  },
});
export default styles;
