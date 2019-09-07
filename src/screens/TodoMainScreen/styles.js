import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  headerContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1.5,
  },
  clockContainer: {
    flex: 3,
  },
  listHeaderContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 6,
  },
});

export default styles;
