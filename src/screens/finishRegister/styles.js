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
    width: 60,
    height: 60,
    top: '5%',
    left: '43%',
    position: 'absolute',
    top: '4%',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 25,
    textAlign: 'left',
    top: '0%',
    marginLeft: 25,
  },
  description: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'left',
    top: '5%',
    marginLeft: 20,
  },
  imgFinishArt: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    top: '6%',
  },

  buttonBack: {
    flexDirection: 'row',
    bottom: '-35%',
    marginLeft: '5%',
  },
  textBack: {
    fontSize: 18,
    fontFamily: 'boldIBM',
    color: '#000',
    textAlign: 'center',
    marginLeft: 8,
  },

});

export default styles;
