import { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Title,
  Input,
  Alert,
  Button,
  ButtonTitle,
  RegisterLabel,
  RegisterLink,
} from "./styles";
import { app } from "../../Firebase/app";
import { TrainerContexts } from "../../contexts/TrainerContexts";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUserId } = useContext(TrainerContexts)

  const handleLoginFirebase = async () => {
    try {
      const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user
      setUserId(user.uid)
      navigation.navigate("Home")
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user)=> {
      if(user) {
        setUserId(user.uid);
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      }
    })
  }, []);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Title>PokeApp</Title>
      <Input
        placeholder="enter your e-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="enter a password"
        secureTextEntry={true}
        type={"text"}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Alert>
        {error && (
          <>
            <Ionicons name="md-alert-circle-outline" size={24} color="grey" />{" "}
            Invalid e-mail or password{" "}
          </>
        )}
      </Alert>
      {email === "" || password === "" ? (
        <Button disabled={true}>
          <ButtonTitle>Sign in</ButtonTitle>
        </Button>
      ) : (
        <Button onPress={handleLoginFirebase}>
          <ButtonTitle>Sign in</ButtonTitle>
        </Button>
      )}

      <RegisterLabel>
        Don't have a registration?
        <RegisterLink onPress={()=> navigation.navigate("Register")}> Sign up now...</RegisterLink>
      </RegisterLabel>
    </Container>
  );
}
