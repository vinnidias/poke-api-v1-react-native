import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  logo: {
    flex: 1,
    width: '100%',
    paddingVertical: 60,
    alignItems: 'center',
  },

  srollContainer: {
    flex: 2,
    maxHeight: '80%',
    width: "100%",
    marginTop: 50,
  },

  loadMore: {
    alignSelf: 'center',  
    fontSize: 18,
  }
});

export default styles