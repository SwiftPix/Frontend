import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  closeButton: {
    position: 'absolute',
    right: '10%',
    top: '6%',
  },
  imgTrophy: {
    width: 400,
    height: 370,
    resizeMode: 'center',
    alignSelf: 'center',
    top: '-20%',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 30,
    textAlign: 'center',
    top: '-35%',
  },
});

export default styles;
