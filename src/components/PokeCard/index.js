import * as RN from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

import { colorTypesSelector } from "../../utils/colorTypesSelector";
import { changeFirstStringToUpperCase } from '../../utils/changeFirstStringIndexToUpperCase';
import styles from "./styles";
import logo from "../../assets/pokeLogo.png";
import pokeball from '../../assets/pokeBallGif.gif'

export function PokeCard({ props, onPress }) {
  const [imgPath, setImagePath] = React.useState("./");
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const path = await axios.get(props.url);
        const res = path.data;
        const dreamWorldPath = res.sprites;
        const objectToArray = Object.entries(dreamWorldPath.other);
        const imgPath = objectToArray[2][1].front_default;
        setData({ ...res });
        setImagePath(imgPath);
      } catch (error) {
        console.log("req fail: ", error);
      }
    };
    getData();
  }, [props]);

  return (
    <RN.TouchableOpacity
      style={{
        backgroundColor: data
          ? colorTypesSelector(data.types[0].type.name)
          : "white",
        ...styles.container,
      }}
      onPress={onPress}
    >
      <RN.View style={styles.info}>
        <RN.Text style={styles.name}>
          {changeFirstStringToUpperCase(props.name)}
        </RN.Text>
        {data &&
          data.types.map((item, index) => {
            return (
              <RN.Text style={styles.type} key={index}>
                {item.type.name}
              </RN.Text>
            );
          })}
      </RN.View>

      <RN.ImageBackground source={logo} style={styles.logo} resizeMode="cover">
        <RN.Text style={styles.id}>#{data && data.id}</RN.Text>
       {data ? <RN.Image source={{ uri: imgPath }} style={styles.tinyLogo} />
        : <RN.Image source={pokeball} style={styles.tinyLogo}/> 
      }
      </RN.ImageBackground>
    </RN.TouchableOpacity>
  );
}
