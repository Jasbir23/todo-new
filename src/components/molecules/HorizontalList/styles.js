import {StyleSheet} from 'react-native';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  todoCard: {
    width: helperSizes.cardWidth,
    height: helperSizes.cardHeight,
    backgroundColor: 'red',
    marginHorizontal: helperSizes.cardMargin,
    borderRadius: helperSizes.cardRadius,
    shadowColor: colors.cardShadowColor,
    shadowOffset: {
      width: helperSizes.widthShadowOffset,
      height: helperSizes.heightShadowOffset,
    },
    shadowOpacity: helperSizes.cardShadowOpacity,
    shadowRadius: helperSizes.cardShadowRadius,
    elevation: helperSizes.cardElevation,
  },
});

export default styles;
