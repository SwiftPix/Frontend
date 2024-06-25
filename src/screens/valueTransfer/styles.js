import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingTop: '15%',
  },
  containerbalence: {
    backgroundColor: '#fff',
    width: '80%',
    height: 130,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 6,
    marginTop:10,
  },
  balenText: {
    textAlign: 'center',
    fontFamily: 'boldIBM',
    fontSize: 20,
    marginTop: 20,
    color: '#00A896',
    marginBottom: 20,
  },
  balenValue: {
    textAlign: 'center',
    fontFamily: 'ibmRegular',
    fontSize: 26,
  },
  inputValue: {
    fontFamily: 'ibmRegular',
    fontSize: 48,
    borderBottomWidth: 3,
    borderEndWidth: 40,
    textAlign: 'center',
    borderColor: '#D9D9D9',
    margin: '10%',
  },
  containerDestination: {
    margin: '5%',
    backgroundColor: '#fff',
    width: '72%',
    height: '30%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  titleDestination: {
    textAlign: 'center',
    fontFamily: 'boldIBM',
    fontSize: 18,
    marginTop: 20,
    color: '#00A896',
    marginBottom: 15,
  },
  nameDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginBottom: 1,
    marginLeft: '10%',
  },
  cpfDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginBottom: 1,
    marginLeft: '10%',
  },
  bankDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginBottom: 1,
    marginLeft: '10%',
  },
  bankAg: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginBottom: 1,
    marginLeft: '10%',
  },
  bankCc: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginBottom: 1,
    marginLeft: '10%',
  },
  nextButton: {
  alignSelf: 'center',
  width: '85%',
  backgroundColor: '#00A896',
  paddingHorizontal: 0,
  paddingVertical: 15,
  borderRadius: 16,
  bottom: '-13%',
  },
  nextText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
  },
  headerImg: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    top: '1%',
    left: '1%',
  
  },


});
export default styles;
