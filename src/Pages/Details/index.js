import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";

import {
  Container,
  HeaderContainer,
  Type,
  BaseDataView,
  Label,
  ScrollDetails,
  Stats,
} from "./styles.js";
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
            {changeFirstStringIndexToUpperCase(fullPokemonData.name)} #
            {fullPokemonData.id}
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
        <BaseDataView>
          <Label>Base Exp: {fullPokemonData.base_experience}</Label>
          <Label>Height: {fullPokemonData.height}</Label>
          <Label>Weight: {fullPokemonData.weight}</Label>
        </BaseDataView>
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
      <ScrollDetails>
        <Stats
          style={{
            elevation: 2,
            shadowColor: "#171717",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {fullPokemonData.stats.map((item, index) => {
            const rightStats = ["attack", "special-attack", "speed"];
            const statName = item.stat.name
            const baseStat = item.base_stat
            return (
              <Label
                key={index}
                style={{
                  color: "grey",
                  width: "50%",
                  textAlign: rightStats.includes(statName) ? "right" : "left",
                  fontSize: 15
                }}
              >
                {statName.replace(/-/g, " ")}: {baseStat}
              </Label>
            );
          })}
        </Stats>

        <Stats style={{ elevation: 2, shadowColor: "#171717" }}></Stats>

        <Stats style={{ elevation: 2, shadowColor: "#171717" }}></Stats>
      </ScrollDetails>
    </Container>
  );
}
