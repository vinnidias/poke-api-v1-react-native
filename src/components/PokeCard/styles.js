import { StyleSheet } from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    
    width: '80%',
    height: 150,
    padding: 2,
    margin: 10,
    padding: 10,
    
    borderRadius: 20
  },

  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },

  type: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
    borderRadius: 15,
    padding: 1,
    textAlign: 'center'
  },

  logo: {
    width: 90,
    height: 90,
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },
})

export default styles