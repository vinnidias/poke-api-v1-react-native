import { useContext, useMemo, useState } from "react";

import { pokeApiClient } from "../../services/pokeApiClient";
import { Container, Label } from "./styles.js";
import { PokeDataContexts } from "../../contexts/PokeDataContexts";
import { changeFirstStringIndexToUpperCase } from "../../utils/changeFirstStringIndexToUpperCase";

export function AbilitiesCard({ ability }) {
  const [effectEntries, setEffectEntries] = useState("");

  useMemo(() => {
    (async () => {
      try {
        const response = await pokeApiClient.get(`/ability/${ability}/`);
        const filterEffectEntries = response.data.effect_entries.filter(value => 
          value.language.name === 'en'
        );
        const effectEntries = filterEffectEntries[0].effect
        setEffectEntries(effectEntries)
      } catch (error) {
        console.log("ability req fail", error, ability);
        console.log(typeof ability);
      }
    })();
  }, []);

  return (
    <Label>
      <Label style={{fontWeight: 'bold'}}>{changeFirstStringIndexToUpperCase(ability)}:</Label> {effectEntries}
    </Label>
  );
}
