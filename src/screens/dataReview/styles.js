import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  containerDestination: {
    margin: '3%',
    backgroundColor: '#fff',
    width: '85%',
    height: '30%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  iconUser: {
    left: '7%',
    top: '7%',
  },
  destinationTitle: {
    textAlign: 'left',
    fontFamily: 'boldIBM',
    fontSize: 20,
    color: '#00A896',
    top: '-5%',
    left: '17%',
  },
  destinationDatas: {
    marginLeft: '7%',
    marginBottom: '5%',
  },
  nameDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
  },
  cpfDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
  },
  bankDestination: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
  },
  editKey: {
    flexDirection: 'column',
  },
  iconHide: {
    position: 'absolute',
    left: '85%',
    bottom: 0,
  },
  titleEditKey: {
    fontFamily: 'boldIBM',
    fontSize: 18,
    left: '7%',
  },
  dataTypeContainer: {
    flexDirection: 'row',
    marginTop: '4%',
    maxWidth: '90%',
  },
  typeKey: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    position: 'absolute',
    left: '7%',
  },
  dataKey: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    position: 'absolute',
    left: '50%',
  },
  containerValue: {
    margin: '3%',
    backgroundColor: '#fff',
    width: '85%',
    height: '20%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  realIcon: {
    left: '7%',
    top: '12%',
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  titleValue: {
    textAlign: 'left',
    fontFamily: 'boldIBM',
    fontSize: 20,
    color: '#00A896',
    top: '2%',
    left: '10%',
    marginBottom: '5%',
  },
  editButton: {
    flexDirection: 'row',
    left: '17%',
    width: '90%',
  },
  textValue: {
    fontFamily: 'ibmRegular',
    fontSize: 32,
  },
  iconEdit: {
    alignSelf: 'center',
    left: 115,
  },
  valueContainer: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  balanceText: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    position: 'absolute',
    left: '7%',
  },
  balanceValue: {
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 16,
    position: 'absolute',
    left: '50%',
  },
  containerDescription: {
    margin: '3%',
    backgroundColor: '#fff',
    width: '85%',
    height: '25%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  titleDescription: {
    textAlign: 'left',
    fontFamily: 'boldIBM',
    fontSize: 16,
    color: '#00A896',
    top: '5%',
    left: '5%',
  },
  wordCounter: {
    position: 'absolute',
    color: '#00A896',
    fontFamily: 'boldIBM',
    fontSize: 16,
    left: '80%',
    top: '5%',
  },
  Description: {
    top: '15%',
    alignSelf: 'center',
    borderColor: '#00A896',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    height: '65%',
    padding: 10,
  },
  transferButton: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#00A896',
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderRadius: 16,
    bottom: '-2%',
  },
  transferText: {
    fontSize: 20,
    fontFamily: 'boldIBM',
    color: '#fff',
    textAlign: 'center',
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
