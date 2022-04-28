import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const Type = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  max-width: 100px;
  background-color: ${(props) => colorTypesSelector(props.typeColor)};
  border-radius: 15px;
  padding: 4px;
  text-align: center;
`;

import { StyleSheet } from "react-native";
import { colorTypesSelector } from "../../utils/colorTypesSelector";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
    opacity: 0.9,
  },

  titleTexts: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: "-80%"
  },

  scrollDetails: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    marginTop: -75,
    padding: 30,
  },
});

export default styles;
