import * as RN from "react-native";
import * as React from "react";

import { pokeApiClient } from "../../services/pokeApiClient";
import { colorTypesSelector } from "../../utils/colorTypesSelector";
import { changeFirstStringIndexToUpperCase } from '../../utils/changeFirstStringIndexToUpperCase';
import styles from "./styles";

export function Details({ route, navigation }) {
  const { ...item } = route.params;
  const { ...data } = route.params;

  const [initialData, setInitialData] = React.useState({ ...data });
  const [bgColor, setBgColor] = React.useState(
    data.types ? colorTypesSelector(data.types[0].type.name) : ""
  );

  React.useMemo(() => {
    (async () => {
      try {
        const path = await pokeApiClient.get(`pokemon/${item.name}`);
        const res = path.data;
        console.log("get with item name: ", res.name);
        setInitialData({ ...res });
        setBgColor(colorTypesSelector(res.types[0].type.name));
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  return (
    <RN.View style={{ flex: 1 }}>
      <RN.View style={{ backgroundColor: bgColor, ...styles.headerContainer }}>
        <RN.View>
          <RN.Text style={styles.titleTexts}>
            {changeFirstStringIndexToUpperCase(initialData.name)}
          </RN.Text>
        </RN.View>
        <RN.View>
          {initialData.sprites && <RN.Image
            source={{
              uri: initialData.sprites.other["official-artwork"].front_default,
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
