import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  mainScrollView: {},
  drawerIcon: {},
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {marginHorizontal: 2, padding: 2},
  dateAndGreet: {margin: 10, padding: 5, marginVertical: 10},
  date: {color: 'green', fontSize: 18},
  greet: {color: 'green', fontSize: 30, fontWeight: '700'},
  iconStyle: {width: 35, height: 35, tintColor: 'grey'},
});

export default styles;
