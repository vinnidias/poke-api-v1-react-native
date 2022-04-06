import {
  TextInput,
  StyleSheet,
  View,
  Button,
  ScrollView,
  Text,
} from "react-native";
import * as React from "react";
import axios from "axios";

import { PokeCard } from "../../components/PokeCard";

export default function Home() {
  const [text, onChangeText] = React.useState("");
  const [initialData, setInitialData] = React.useState([]);
  const [number, onChangeNumber] = React.useState(null);

  const handleInput = (event) => {
    onChangeText(event);
  };

  const onPress = () => {
    axios.get();
  };

  const renderItem = ({ item }) => {
    <PokeCard props={item} />;
  };

  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log("o componente montou");
        const path = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15"
        );
        const res = path.data.results;
        setInitialData([...res]);
      } catch (error) {}
    };
    getData();
  }, []);

  function calculaMedia(x, y) {
    return x + y / 2;
  }

  console.log("initial data: ", initialData);
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
      <ScrollView style={{ flex: 1, flexDirection: 'row', maxHeight: 500, flexWrap: 'wrap', backgroundColor: 'red'}}>
        {initialData.map((item, index) => {
          return (
            <View key={index}>
              <PokeCard props={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  headerContainer: {
    flex: 1,
    maxHeight: 150,
    paddingTop: 20,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f06151",
  },

  listContainer: {
    flex: 1,
    height: 400,
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 4,
    flexBasis: 200,

    padding: 10,
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "red",
  },

  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
