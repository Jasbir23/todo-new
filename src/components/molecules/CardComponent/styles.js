import {StyleSheet} from 'react-native';
import helperSizes from '../../../themes/helperSizes';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: helperSizes.cardWidth,
    height: helperSizes.cardHeight,
    marginHorizontal: helperSizes.cardMargin,
    borderRadius: helperSizes.cardRadius,
    elevation: 5,
    backgroundColor: '#fff',
    zIndex: helperSizes.cardElevation,
  },
  shadow: {
    shadowColor: colors.fontsPrimary,
    shadowOffset: {
      width: helperSizes.widthShadowOffset,
      height: helperSizes.heightShadowOffset,
    },
    shadowOpacity: helperSizes.cardShadowOpacity,
    shadowRadius: helperSizes.cardShadowRadius,
  },
  titleContainer: {
    flex: 1,
    borderRadius: helperSizes.cardRadius,
  },
  listContainer: {
    flex: 5,
    borderRadius: helperSizes.cardRadius,
  },
});

export default styles;
