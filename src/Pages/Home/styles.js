import * as RN from "react-native";

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 600

  },
  logo: {
    flex: 1,
    width: '100%',
    paddingVertical: 60,
    alignItems: 'center',
  },

  font: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 40
  },

  inputContainer: {
    width: 350,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 10,
    margin: 20,
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  searchIcon:{
    width: 20,
    height: 20,
  },

  buttonsContainer: {
    flex: 2,
    flexWrap: 'wrap',
    width: '100%',
    maxHeight: '70%',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  
  navigationButton: {
    borderRadius: 20,
    width: '46%',
    height: 60,
    marginVertical: 10,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  buttonTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  }
});


export default styles