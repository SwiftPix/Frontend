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
  imgSecurity: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 24,
    alignSelf: 'center',
    marginTop: '3%',
  },
  title: {
    color: '#000',
    fontFamily: 'boldIBM',
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    color: '#6C6C6C',
    fontFamily: 'ibmRegular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  line: {
    width: 85,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
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
    width: '100%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    position: 'absolute',
    bottom: 0,
    marginBottom: 40
  },
  doneText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
