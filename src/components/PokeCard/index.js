import * as RN from "react-native";
import * as React from "react";
import axios from "axios";

import styles from "./styles";
import logo from "../../assets/pokeLogo.png";
import { colorTypesSelector } from "../../utils/colorTypesSelector";

export function PokeCard({ props, key }) {
  const [imgPath, setImagePath] = React.useState("");
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
      } catch (error) {}
    };
    getData();
  }, [props]);

  return (
    <RN.View>
      {data ? (
        <RN.TouchableOpacity
          style={{
            backgroundColor: data
              ? colorTypesSelector(data.types[0].type.name)
              : "white",
            ...styles.container,
          }}
          key={key}
        >
          <RN.View style={styles.info}>
            <RN.Text style={styles.name}>{props.name.charAt(0).toUpperCase()+props.name.slice(1, props.name.lenght)}</RN.Text>
            {
              data && data.types.map((item,index)=> {
                return(
                  <RN.Text style={styles.type} key={index}>{item.type.name}</RN.Text>
                )
              })
            }
          </RN.View>

          <RN.ImageBackground
            source={logo}
            style={styles.logo}
            resizeMode="cover"
          >
            <RN.Text style={styles.id}>#{data && data.id}</RN.Text>
            <RN.Image source={{ uri: imgPath }} style={styles.tinyLogo} />
          </RN.ImageBackground>
        </RN.TouchableOpacity>
      ) : (
        <RN.Text>Carregando</RN.Text>
      )}
    </RN.View>
  );
}
