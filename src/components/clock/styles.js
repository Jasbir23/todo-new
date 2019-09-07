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
    position: 'absolute',
    height: 2 * helperSizes.hourHand,
    width: 2 * helperSizes.hourHand,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    elevation: 6,
    // transform: [{rotate: '30deg'}],
  },
  minuteClock: {
    position: 'absolute',
    height: 2 * helperSizes.minHand,
    width: 2 * helperSizes.minHand,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    elevation: 6,
    // transform: [{rotate: '45deg'}],
  },
  secClock: {
    position: 'absolute',
    height: 2 * helperSizes.secHand,
    width: 2 * helperSizes.secHand,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 6,
    // transform: [{rotate: '60deg'}],
  },
  secHand: {
    width: 1,
    height: helperSizes.secHand,
    backgroundColor: colors.fontsPrimary,
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
