import * as RN from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { pokeApiClient } from "../../services/pokeApiClient";
import { PokeCard } from "../../components/PokeCard";
import styles from "./styles";
import pokeball from '../../assets/pokeBallGif.gif'

export function Pokedex({ navigation }) {
  const [list, setList] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  React.useMemo(() => {
    (async () => {
      try {
        const path = await pokeApiClient.get(
          `pokemon?offset=${offset}&limit=20`
        );
        const res = path.data.results;
        setList(prev => [...prev, ...res]);
      } catch (error) {
        console.log("req fail: ", { ...error });
      }
    })();
    return ()=> setList([])
  }, [offset]);

  return (
    <RN.SafeAreaView style={styles.container}>
      {list.length !== 0 ? <RN.ScrollView style={styles.srollContainer}>
        {list.map((item, index) => {
          return <PokeCard props={item} key={index} onPress={()=> navigation.navigate('Details', {...item})}/>;
        })}
        <RN.TouchableOpacity>
          <RN.Text onPress={()=> setOffset(offset + 20)} style={styles.loadMore}>Load more...</RN.Text>
        </RN.TouchableOpacity>
      </RN.ScrollView>
      : <RN.Image source={pokeball} style={{alignSelf: "center", marginTop: '50%'}}/>  
    }
    </RN.SafeAreaView>
  );
}
