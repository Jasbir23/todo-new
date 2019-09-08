import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import helperSizes from '../../themes/helperSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerClock: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: helperSizes.clockEdge,
    width: helperSizes.clockEdge,
    borderRadius: helperSizes.clockEdge / 2,
    elevation: 5,
    shadowColor: colors.fontsPrimary,
    shadowOffset: {
      width: helperSizes.clockShadowWidth,
      height: helperSizes.clockShadowHeight,
    },
    shadowOpacity: helperSizes.cardShadowOpacity,
    shadowRadius: helperSizes.cardShadowRadius,
  },
  hourClock: {
    height: 2 * helperSizes.hourHand,
    width: 2 * helperSizes.hourHand,
    marginTop: 20,
  },
  lightClock: {
    height: helperSizes.secHand + 20,
    width: helperSizes.secHand + 20,
    backgroundColor: 'red',
    elevation: 0,
  },
  minuteClock: {
    height: 2 * helperSizes.minHand,
    width: 2 * helperSizes.minHand,
    marginTop: 10,
  },
  clock: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 6,
  },
  secClock: {
    height: 2 * helperSizes.secHand,
    width: 2 * helperSizes.secHand,
  },
  secHand: {
    width: 1,
    height: helperSizes.secHand,
    backgroundColor: colors.fontsPrimary,
  },
  lightHand: {
    width: 2,
    height: helperSizes.secHand + 10,
    backgroundColor: colors.fontsSecondary,
  },
  hourHand: {
    width: 3,
    height: helperSizes.hourHand,
    backgroundColor: colors.fontsSecondary,
  },
  minHand: {
    width: 2,
    height: helperSizes.minHand,
    backgroundColor: colors.fontsSecondary,
  },
});
export default styles;
