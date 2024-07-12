import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  headerImg: {
    width: '20%', 
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  selectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  accordion: {
    marginBottom: 20,
    width: '100%', 
  },
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  selectCountry: {
    marginTop: 20,
    width: '100%', 
  },
  valueContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%', 
  },
  valueLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doneButton: {
    backgroundColor: '#00A896',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%', 
    marginBottom: 20,
    marginLeft: 25
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  scheduleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
