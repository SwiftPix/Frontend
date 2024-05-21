import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  byIbmContent: {
    flexDirection: 'row',
    bottom: '-65%',
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
