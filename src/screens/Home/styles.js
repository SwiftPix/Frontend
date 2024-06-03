import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ibmRegular',
    backgroundColor: '#F4F4F4',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#00A896',
    minHeight: '18%',
  },
  headerText: {
    color: '#FFF',
    fontSize: 30,
    position: 'absolute',
    bottom: 15,
    left: 20,
    fontFamily: 'ibmRegular',
  },
  headerImages: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconHeader: {
    margin: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  list: {
    marginTop: '12%',
    flexDirection: 'column',
    width: '85%',
    height: 360,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  balanceTitle: {
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0, 0.1)',
    width: '100%',
    flexDirection: 'row',
  },
  textBalance: {
    left: '25%',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'left',
    fontFamily: 'ibmRegular',
    fontSize: 20,
  },
  iconHide: {
    left: 130,
    marginTop: '40%',
  },
  balance: {
    fontFamily: 'ibmRegular',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderEndWidth: 100,
    textAlign: 'center',
  },
  transactions: {
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pixContainer: {
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
  },
  pixValueBox: {
    flexDirection: 'column',
  },
  pixReciveSend: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left',
  },
  pixValue: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 5,
  },
  pixDate: {
    fontFamily: 'ibmRegular',
    fontSize: 16,
    height: 25,
  },
  pixDateBox: {
    alignSelf: 'center',
    height: 25,
    right: '5%',
  },
  btnKeys: {
    borderRadius: 100,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#00A896',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,

  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    fontFamily: 'ibmRegular',
  },
  pixBtn: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    minWidth: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#00A896',
    shadowColor: '#1E1E1E',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 220,
    height: 60,
    elevation: 5,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnRows: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginHorizontal: 25,
  },
  textKeys: {
    fontFamily: 'ibmRegular',
    fontSize: 14,
    bottom: -40,
    marginLeft: -5,
    marginTop: 20,
    width: 150,
    textAlign: 'center',
    
  },
  pixText: {
    color: '#FFF',
    fontFamily: 'ibmRegular',
    fontSize: 22,
    marginTop: -5,
  },
  logo: {
    position: 'absolute',
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  pixLogo: {
    height: 25,
    width: 25,
    marginRight: -5,
  },
  buttons: {
    position: 'absolute',
    bottom: 70,
  },
  collapBody: {
    elevation: 5,
  },
  collapHeader: {
    elevation: 5,
    flexDirection: 'row',
  },
  statementButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',
  },
  statementText: {
    color: '#414141',
    fontFamily: 'boldIBM',
    fontSize: 18,
    paddingRight: 10,
  },
});
export default styles;
