import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFBFE',
  },
  headerImg: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    position: 'absolute',
    top: '4%',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 30,
    textAlign: 'left',
    top: '2%',
  },
  description: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'left',
    top: '5%',
  },
  imgFinishArt: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    top: '6%',
  },
  buttonHelp: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: '-20%',
  },
  textHelp: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
  },
  iconQuestion: {
    alignSelf: 'center',
    marginTop: 3,
    marginLeft: 7,
  },
});

export default styles;
