import {StyleSheet} from 'react-native';
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
    flex: 11.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  cardContainer2: {
    flex: 11.5,
    alignSelf: 'flex-start',
    marginLeft: -helperSizes.cardExtension / 2,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  largeCard1: {
    height: helperSizes.height,
    width: helperSizes.width + helperSizes.cardExtension,
    borderRadius: helperSizes.bigCardRadius,
    transform: [{translateX: -helperSizes.cardExtension / 2}],
    backgroundColor: 'white',
    paddingLeft: helperSizes.cardExtension,
  },
  todoHeader: {
    flex: 1,
    paddingLeft: 20,
  },
  todoList: {
    flex: 12,
    justifyContent: 'flex-start',
  },
  bigList: {
    marginBottom: (3 * helperSizes.sliderCardLimits) / 2,
  },
});
export default styles;
