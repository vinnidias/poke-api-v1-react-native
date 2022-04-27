import { useContext, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Container, List, Touchable, Label, LoaderIcon } from "./styles.js";
import pokeball from "../../assets/pokeBallGif.gif";
import { pokeApiClient } from "../../services/pokeApiClient";
import { PokeCard } from "../../components/PokeCard";
import { PokeDataContexts } from "../../contexts/PokeDataContexts";

export function Pokedex({ navigation }) {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const { setData } = useContext(PokeDataContexts);

  useMemo(() => {
    (async () => {
      try {
        const path = await pokeApiClient.get(
          `pokemon?offset=${offset}&limit=20`
        );
        const res = path.data.results;
        setList((prev) => [...prev, ...res]);
      } catch (error) {
        console.log("req fail: ", { ...error });
      }
    })();
    return () => setList([]);
  }, [offset]);

  return (
    <Container>
      {list.length !== 0 ? (
        <>
          <List
            keyboardShouldPersistTaps="handled"
            data={list}
            keyExtractor={(item, index) => index}
            onEndReached={() => setOffset(offset + 20)}
            onEndReachedThreshold={10}
            renderItem={({ item }) => (
              <PokeCard
                props={item}
                onPress={(data) => {
                  setData(data);
                  navigation.navigate("Details");
                }}
              />
            )}
          />
          
        </>
      ) : (
        <LoaderIcon source={pokeball} />
      )}
    </Container>
  );
};
