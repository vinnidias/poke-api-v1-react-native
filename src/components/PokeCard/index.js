import { useMemo, useState } from "react";
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

import { changeFirstStringIndexToUpperCase } from "../../utils/changeFirstStringIndexToUpperCase";
import logo from "../../assets/pokeLogo.png";
import pokeball from "../../assets/pokeBallGif.gif";
import hpEmoji from "../../assets/ez_heart.gif";
import {
  TouchableContainer,
  DataContainer,
  Name,
  Type,
  PokeBallBackground,
  TopTextContainer,
  PokeId,
  Hp,
  Attack,
  PokeSprite,
  LoaderIcon,
  Defense
} from "./styles.js";

export function PokeCard({ props, onPress }) {
  const [imgPath, setImagePath] = useState("./");
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useMemo(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const path = await axios.get(props.url);
        const res = path.data;
        const dreamWorldPath = res.sprites;
        const objectToArray = Object.entries(dreamWorldPath.other);
        const imgPath = objectToArray[2][1].front_default;
        setData({ ...res });
        setImagePath(imgPath);
        setIsLoading(false);
      } catch (error) {
        console.log("req fail: ", error);
      }
    };
    getData();
  }, [props]);

  return (
    <>
      {isLoading ? (
        <LoaderIcon source={pokeball} />
      ) : (
        <TouchableContainer
          style={{ elevation: 30, shadowColor: "#000" }}
          onPress={() => onPress(data)}
          typeBackgroundColor={data ? data.types[0].type.name : ""}
        >
          <DataContainer>
            <Name>{changeFirstStringIndexToUpperCase(props.name)}</Name>
            {data &&
              data.types.map((item, index) => {
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
          </DataContainer>
          <PokeBallBackground source={logo} resizeMode="cover">
            <TopTextContainer>
              <Hp>
                {data && data.stats[0].base_stat}{" "}
                {data && changeFirstStringIndexToUpperCase(data.stats[0].stat.name)}
              </Hp>
              <PokeId>#{data && data.id}</PokeId>
            </TopTextContainer>

            <PokeSprite source={{ uri: imgPath }} />
          </PokeBallBackground>
          <Attack>
            {data && changeFirstStringIndexToUpperCase(data.stats[1].stat.name)}:{" "}
            {data && data.stats[1].base_stat}
          </Attack>
          <Defense>
            {data && changeFirstStringIndexToUpperCase(data.stats[2].stat.name)}:{" "}
            {data && data.stats[2].base_stat}
          </Defense>
        </TouchableContainer>
      )}
    </>
  );
}
