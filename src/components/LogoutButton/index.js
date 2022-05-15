import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import { Container } from "./styles";

export function LogoutButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>
        <Feather name="log-out" size={24} color="#dbdbdb" />
      </Text>
    </Container>
  );
}
