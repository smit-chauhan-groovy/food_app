import {StyleSheet} from 'react-native';
import BaseColor from '../../Config/colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: BaseColor.primary,
    height: 60,
    paddingHorizontal: 15,
  },
  iconContainer: {
    paddingVertical: 5,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
