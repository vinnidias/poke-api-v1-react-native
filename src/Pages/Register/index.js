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

export function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUserId } = useContext(TrainerContexts);

  const handleRegisterLoginFirebase = async () => {
    try {
      const userCredential = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      setUserId(user.uid);
      navigation.navigate("Home");
    } catch (error) {
      setError(error.message);
      console.log(...error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Title>Register</Title>
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
            {error}{" "}
          </>
        )}
      </Alert>
      {email === "" || password === "" ? (
        <Button disabled={true}>
          <ButtonTitle>Sign up</ButtonTitle>
        </Button>
      ) : (
        <Button onPress={handleRegisterLoginFirebase}>
          <ButtonTitle>Sign up</ButtonTitle>
        </Button>
      )}
      <RegisterLabel>
        Don't have a registration?
        <RegisterLink onPress={() => navigation.navigate("Login")}>
          {" "}
          Sign up now...
        </RegisterLink>
      </RegisterLabel>
    </Container>
  );
}
