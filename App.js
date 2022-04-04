import { SafeAreaView, TextInput, StyleSheet, View, Button } from "react-native";
import * as React from "react";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const handleInput = (event) => {
    onChangeText(event);
  };

  const onPress = () => {
    console.log("text: ", text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInput(text)}
          value={text}
        />
        <Button
          onPress={onPress}
          title="Get"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.listContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
  },

  headerContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: '#f06151',
  },
  
  listContainer: {
    flex: 7,

  },

  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
