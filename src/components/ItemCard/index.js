import { useMemo, useState } from "react";
import { pokeApiClient } from "../../services/pokeApiClient";
import { changeSpecialChracterToSpace } from "../../utils/changeSpecialChracterToSpace";
import { removeColon } from "../../utils/removeColon";
import { Container, Label, Title, Sprite } from "./styles";

export function ItemCard({ props }) {
  const [spritePath, setSpritePath] = useState("./");
  const [effectEntries, setEffectEntries] = useState("");

  useMemo(() => {
    (async () => {
      try {
        const path = await pokeApiClient.get(`item/${props.item.name}`);
        const effectEntries = path.data.effect_entries[0].effect;
        const sprite = path.data.sprites.default;
        setSpritePath(sprite);
        setEffectEntries(effectEntries);
      } catch (error) {
        console.log("item req fail: ", error);
      }
    })();
  }, []);

  console.log("props on item Card", spritePath);
  return (
    <Container>
      <Title>-{changeSpecialChracterToSpace(props.item.name)}: </Title>
      <Sprite source={{ uri: `${spritePath}` }} />
      <Label>
        <Title>Effect: </Title> {removeColon(effectEntries)}
      </Label>
    </Container>
  );
}
