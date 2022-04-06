import * as RN from "react-native";
import * as React from "react";
import axios from "axios";

import styles from "./styles";
import logo from "../../assets/pokeLogo.png";
import searchIcon from '../../assets/searchIcon.png';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState("")
  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.ImageBackground source={logo} style={styles.logo} resizeMode="cover">
        <RN.Text style={styles.font}>
          Which Pokemon are you looking for?
        </RN.Text>
        <RN.View style={styles.inputContainer}>
          <RN.TextInput 
            placeholder="Type the name or id of the pokemon" 
            value={searchValue}
            onChangeText={(text)=> setSearchValue(text)}
          />
          <RN.TouchableOpacity>
            <RN.Image source={searchIcon} style={styles.searchIcon}/>
          </RN.TouchableOpacity>
        </RN.View>
      </RN.ImageBackground>
    </RN.SafeAreaView>
  );
}
