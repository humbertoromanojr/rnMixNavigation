import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, heigth: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
    textAlign: 'right',
  },
});

export default styles;
