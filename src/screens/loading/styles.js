import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  loadingIcon: {
    marginTop: '50%',
  },
  loadingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    fontFamily: 'boldIBM',
    fontSize: 30,
    color: '#4589FF',
    marginBottom: 17,
    alignSelf: 'center',
  },
  logo: {
    bottom: '-14%',
    left: '-27%',
    width: 250,
    height: 250,
    opacity: 0.2,
    resizeMode: 'contain',
  },
});
export default styles;
