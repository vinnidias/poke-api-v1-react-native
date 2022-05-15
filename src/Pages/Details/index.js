import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  HeaderContainer,
  Type,
  BaseDataView,
  Label,
  ScrollDetails,
  Stats,
  Abilities,
} from "./styles.js";
import { pokeApiClient } from "../../services/pokeApiClient";
import { colorTypesSelector } from "../../utils/colorTypesSelector";
import { changeFirstStringIndexToUpperCase } from "../../utils/changeFirstStringIndexToUpperCase";
import { PokeDataContexts } from "../../contexts/PokeDataContexts";
import { TrainerContexts } from "../../contexts/TrainerContexts/index.js";
import { AbilitiesCard } from "../../components/AbilitiesCard/index.js";
import { ItemCard } from "../../components/ItemCard/index.js";
import styles from "./styles";
import { app } from "../../Firebase/app.js";

export function Details({ navigation }) {
  const { fullPokemonData } = React.useContext(PokeDataContexts);
  const { uId } = React.useContext(TrainerContexts);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [id, setId] = React.useState(null);

  const db = app.firestore();
  React.useEffect(() => {
    db.collection(uId)
      .get()
      .then((res) => {
        const isFavorite = res.docs.filter(
          (value) => value.data().name === fullPokemonData.name
        );
        if (isFavorite.length !== 0) {
          setIsFavorite(true);
          isFavorite.map((value) => setId(value.id));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(id);
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
        {isFavorite ? (
          <TouchableOpacity
            onPress={() => {
              db.collection(uId)
                .doc(id)
                .delete()
                .then(setIsFavorite(false));
            }}
          >
            <AntDesign
              name="heart"
              size={24}
              color="red"
              style={{ right: 0 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              db.collection(uId).add({
                name: fullPokemonData.name,
                url: `https://pokeapi.co/api/v2/pokemon/${fullPokemonData.name}`,
              }).then(setIsFavorite(true));
            }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color="#fdf5e6"
              style={{ right: 0 }}
            />
          </TouchableOpacity>
        )}

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
            const statName = item.stat.name;
            const baseStat = item.base_stat;
            return (
              <Label
                key={index}
                style={{
                  color: "grey",
                  width: "50%",
                  textAlign: rightStats.includes(statName) ? "right" : "left",
                  fontSize: 15,
                }}
              >
                {statName.replace(/-/g, " ")}: {baseStat}
              </Label>
            );
          })}
        </Stats>

        <Abilities style={{ elevation: 2, shadowColor: "#171717" }}>
          <Label style={{ color: "grey" }}>Abilities</Label>
          {fullPokemonData.abilities.map((item, index) => {
            const name = item.ability.name;
            return <AbilitiesCard ability={name} key={index}></AbilitiesCard>;
          })}
        </Abilities>

        <Abilities style={{ elevation: 2, shadowColor: "#171717" }}>
          <Label style={{ color: "grey" }}>
            {fullPokemonData.held_items.length !== 0
              ? "Held Items"
              : "No Helded Items"}
          </Label>
          {fullPokemonData.held_items.map((item, index) => {
            return <ItemCard props={item} key={index}></ItemCard>;
          })}
        </Abilities>
        <Stats></Stats>
      </ScrollDetails>
    </Container>
  );
}
