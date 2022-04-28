import { Modal, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";

import { ModalCard, Title, DisplayMessage, ButtonText } from "./styles.js";
import abraGif from "../../assets/abra_pokemon.gif";
import imgBg from "../../assets/pokeLogo.png";

export function ErrorModal({ message, onPress, modalVisible }) {
  const [displayTitle, setDisplayTitle] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    if (message.includes("404")) {
      setDisplayTitle("Pokémon not found!");
      setDisplayMessage("Check the name or id and try again!");
    } else {
      setDisplayTitle("Ops!");
      setDisplayMessage("Something is going wrong... 🤦🏾‍♂️ \nTry again later ");
    }
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      statusBarTranslucent={true}
    >
      <ModalCard>
        <Title>{displayTitle}</Title>
        <Image source={abraGif} />
        <DisplayMessage> {displayMessage}</DisplayMessage>
        <TouchableOpacity onPress={onPress}>
          <ButtonText >Ok</ButtonText>
        </TouchableOpacity>
      </ModalCard>
    </Modal>
  );
}
