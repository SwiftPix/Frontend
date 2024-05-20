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
  imgTakePicture: {
    width: 75,
    height: 75,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: '3%',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  subtitles: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    left: '-30%',
  },
  topic: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  line: {
    width: 85,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
  description: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 2,
  },

  description2: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  alert: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  doneButton: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    bottom: '-10%',
  },
  doneText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
