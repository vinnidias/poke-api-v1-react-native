import * as RN from "react-native";
import * as React from "react";

import abraGif from "../../assets/abra_pokemon.gif";

export function ErrorModal({ message, onPress, modalVisible }) {
  const [displayTitle, setDisplayTitle] = React.useState("");
  const [displayMessage, setDisplayMessage] = React.useState("");

  React.useEffect(() => {
    if (message.includes("404")) {
      setDisplayTitle("Pokémon not found!");
      setDisplayMessage("Check the name or id and try again!");
    } else {
      setDisplayTitle("Ops!");
      setDisplayMessage("Something is going wrong... 🤦🏾‍♂️ \nTry again later ");
    }
  }, []);

  return (

    <RN.Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      
    >
      <RN.View
        style={{
          padding: 10,
          width: 350,
          height: 200,
          backgroundColor: "white",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "65%",
          borderRadius: 10,
        }}
      >
        <RN.Text style={{fontWeight: 'bold'}}>{displayTitle}</RN.Text>
        <RN.Image source={abraGif} />
        <RN.Text> {displayMessage}</RN.Text>
        <RN.TouchableOpacity onPress={onPress}>
          <RN.Text style={{color: 'dodgerblue'}}>Ok</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.Modal>
  );
}
