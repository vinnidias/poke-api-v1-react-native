import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },

  titleTexts: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "white" 
  },

  image: { 
    width: 200, 
    height: 200, 
    alignSelf: "center" 
  },

  scrollDetails: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    marginTop: -30,
    padding: 30,
  }
});

export default styles;
