import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00A896',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconHeader: {
    width: 32,
    height: 32,
    marginHorizontal: 5,
  },
  body: {
    flexGrow: 1,
    padding: 16,
  },
  list: {
    marginBottom: 20,
  },
  balanceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttons: {
    padding: 16,
    alignItems: 'center',
  },
  pixBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00A896',
    borderRadius: 8,
  },
  pixLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  pixText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#00B386',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalInfoContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  modalInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalInfoDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  modalKeyItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalKeyText: {
    fontSize: 16,
    marginLeft: 10,
  },
  modalKeyValue: {
    fontSize: 16,
    marginLeft: 'auto',
    color: '#666',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
