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
  const [isLoading, setIsLoading] = useState(false);
  const { setData } = useContext(PokeDataContexts);

  useMemo(() => {
    (async () => {
      try {
        setIsLoading(true);
        const path = await pokeApiClient.get(
          `pokemon?offset=${offset}&limit=10`
        );
        const res = path.data.results;
        setList((prev) => [...prev, ...res]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
    return () => setList([]);
  }, [offset]);

  return (
    <Container>
      <List
        keyboardShouldPersistTaps="handled"
        data={list}
        keyExtractor={(_, index) => index}
        onEndReached={() => {setOffset(offset + 10)}}
        onEndReachedThreshold={0.5}
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

      {isLoading && <LoaderIcon source={pokeball} />}
    </Container>
  );
}
