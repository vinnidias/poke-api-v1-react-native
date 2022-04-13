import * as RN from "react-native";
import * as React from "react";

import { pokeApiClient } from "../../services/pokeApiClient";
import { colorTypesSelector } from "../../utils/colorTypesSelector";
import { changeFirstStringIndexToUpperCase } from '../../utils/changeFirstStringIndexToUpperCase';
import { PokeDataContexts } from "../../contexts/PokeDataContexts";
import styles from "./styles";

export function Details({ navigation }) {
  const { fullPokemonData } = React.useContext(PokeDataContexts);

  return (
    <RN.View style={{ flex: 1 }}>
      <RN.View style={{ backgroundColor: colorTypesSelector(fullPokemonData.types[0].type.name), ...styles.headerContainer }}>
        <RN.View>
          <RN.Text style={styles.titleTexts}>
            {changeFirstStringIndexToUpperCase(fullPokemonData.name)}
          </RN.Text>
        </RN.View>
        <RN.View>
          {fullPokemonData.sprites && <RN.Image
            source={{
              uri: fullPokemonData.sprites.other["official-artwork"].front_default,
            }}
            style={styles.image}
          />}
        </RN.View>
      </RN.View>
      <RN.ScrollView
        style={styles.scrollDetails}
      >
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>

        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
        <RN.Text style={{ fontSize: 28, fontWeight: "bold", margin: 20 }}>
          Testing views
        </RN.Text>
      </RN.ScrollView>
    </RN.View>
  );
}
