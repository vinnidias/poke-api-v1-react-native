import * as RN from 'react-native';
import * as React from 'react';
import axios from 'axios';

import styles from './styles'


export function PokeCard({props}) {
  const [imgPath, setImagePath] = React.useState('')


  React.useEffect(()=>{
    const getData = async () => {
      try {
        const path = await axios.get(props.url);
        const res = path.data;
        const dreamWorldPath =  res.sprites.front_default
        console.log(dreamWorldPath, "antes de setar")
        setImagePath(dreamWorldPath)

      } catch (error) {
        
      }
    }
    getData()
  },[props])

  console.log("image path no estado: ", imgPath)
  return(
    <RN.View style={styles.container}>
      <RN.Text style={styles.text}>
        {props.name}
      </RN.Text>

      <RN.Image
        source={{uri: imgPath}}
        style={styles.tinyLogo}
      />
    </RN.View>
  )
}