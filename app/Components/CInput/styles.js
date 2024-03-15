import {StyleSheet} from 'react-native';
import BaseColor from '../../Config/colors';

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: BaseColor.primary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});

export default styles;
