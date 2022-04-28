import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";

import { Container, HeaderContainer, Type } from "./styles.js";
import { pokeApiClient } from "../../services/pokeApiClient";
import { colorTypesSelector } from "../../utils/colorTypesSelector";
import { changeFirstStringIndexToUpperCase } from "../../utils/changeFirstStringIndexToUpperCase";
import { PokeDataContexts } from "../../contexts/PokeDataContexts";
import styles from "./styles";

export function Details({ navigation }) {
  const { fullPokemonData } = React.useContext(PokeDataContexts);

  return (
    <Container style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          `${colorTypesSelector(fullPokemonData?.types[0].type.name)}`,
          `${colorTypesSelector(
            fullPokemonData.types[1] ? fullPokemonData?.types[1].type.name : ""
          )}`,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        style={styles.headerContainer}
      >
        <View>
          <Text style={styles.titleTexts}>
            {changeFirstStringIndexToUpperCase(fullPokemonData.name)}
          </Text>
          {fullPokemonData.types.map((item, index) => {
            return (
              <Type
                key={index}
                typeColor={item.type.name}
                style={{ elevation: 3, shadowColor: "#000" }}
              >
                {item.type.name}
              </Type>
            );
          })}
        </View>
        <View>
          {fullPokemonData.sprites && (
            <Image
              source={{
                uri: fullPokemonData.sprites.other["official-artwork"]
                  .front_default,
              }}
              style={styles.image}
            />
          )}
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollDetails}>
        <Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </Text>

        <Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </Text>
      </ScrollView>
    </Container>
  );
}
