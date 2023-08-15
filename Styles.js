import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* CONTAINERS */
  container: {
    flex: 1,
    backgroundColor: '#f6f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#800080',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {    
    flexDirection: 'column',
    justifyContent: 'center',    
    margin: 12,
    borderRadius: 10,
  },

  /* TEXT */
  textHeadCentered: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'questrial',
  },
  /* TEXT FIELDS */
  textInputField: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    borderWidth: 1,
    margin: 12,
    height: 'auto',
    borderRadius: 30,
    backgroundColor: '#fff',
  }
});
