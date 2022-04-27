import * as RN from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";
import logo from "../../assets/pokeLogo.png";
import abraGif from "../../assets/abra_pokemon.gif";
import searchIcon from "../../assets/searchIcon.png";
import { ErrorModal } from "../../components/ErrorModal";
import { pokeApiClient } from "../../services/pokeApiClient";
import { PokeDataContexts } from "../../contexts/PokeDataContexts";

export function Home({ navigation }) {
  const [searchValue, setSearchValue] = React.useState("");
  const [errorModalIsVIsible, setErrorModalIsVisible] = React.useState({
    bool: false,
    message: "",
  });
  const { setData } = React.useContext(PokeDataContexts);
  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.ImageBackground source={logo} style={styles.logo} resizeMode="cover">
        <RN.Text style={styles.font}>
          Which Pokémon are you looking for?
        </RN.Text>
        <RN.View style={styles.inputContainer}>
          <RN.TextInput
            placeholder="Type the name or id of the pokemon"
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          <RN.TouchableOpacity
            onPress={async () => {
              try {
                const path = await pokeApiClient.get(`pokemon/${searchValue.toLowerCase().trim()}`);
                const data = path.data;
                if (data["abilities"]) {
                  setData(data);
                  navigation.navigate("Details");
                  setSearchValue("")
                }
                else return
              } catch (error) {
                setErrorModalIsVisible({ bool: true, message: error.message });
              }
            }}
          >
            <RN.Image source={searchIcon} style={styles.searchIcon} />
          </RN.TouchableOpacity>
        </RN.View>
        {errorModalIsVIsible.bool && (
          <ErrorModal
            modalVisible={errorModalIsVIsible.bool}
            message={errorModalIsVIsible.message}
            onPress={() => setErrorModalIsVisible({ bool: false, message: "" })}
          />
        )}
        <RN.View style={styles.buttonsContainer}>
          <RN.TouchableOpacity
            style={{ backgroundColor: "#04DB68", ...styles.navigationButton }}
            onPress={() => navigation.navigate("Pokédex")}
          >
            <RN.Text style={styles.buttonTitle}>Pokédex</RN.Text>
          </RN.TouchableOpacity>

          <RN.TouchableOpacity
            style={{ backgroundColor: "#007AF1", ...styles.navigationButton }}
          >
            <RN.Text style={styles.buttonTitle}>Abilities</RN.Text>
          </RN.TouchableOpacity>

          <RN.TouchableOpacity
            style={{ backgroundColor: "#764887", ...styles.navigationButton }}
          >
            <RN.Text style={styles.buttonTitle}>Locations</RN.Text>
          </RN.TouchableOpacity>

          <RN.TouchableOpacity
            style={{ backgroundColor: "#F95151", ...styles.navigationButton }}
          >
            <RN.Text style={styles.buttonTitle}>Moves</RN.Text>
          </RN.TouchableOpacity>

          <RN.TouchableOpacity
            style={{ backgroundColor: "#FFC600", ...styles.navigationButton }}
          >
            <RN.Text style={styles.buttonTitle}>Items</RN.Text>
          </RN.TouchableOpacity>

          <RN.TouchableOpacity
            style={{ backgroundColor: "#A15B5E", ...styles.navigationButton }}
          >
            <RN.Text style={styles.buttonTitle}>Generations</RN.Text>
          </RN.TouchableOpacity>
        </RN.View>
      </RN.ImageBackground>
    </RN.SafeAreaView>
  );
}
