import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF',
  },
  logo: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  byIbmContent: {
    flexDirection: 'row',
    bottom: '-20%',
  },
  textBy: {
    fontFamily: 'ibmRegular',
    color: '#00A896',
    fontSize: 26,
    marginRight: 5,
  },
  textIbm: {
    fontFamily: 'boldIBM',
    color: '#00A896',
    fontSize: 26,
  },
});
export default styles;
