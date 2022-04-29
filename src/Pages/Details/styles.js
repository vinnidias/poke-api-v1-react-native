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
  margin: 5px 0px;
`;

export const BaseDataView = styled.View`
  height: 40%;
  width: 50%;
  position: absolute;
  right: 0;
  padding: 0px 10px;
  align-items: flex-end;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 5px 0px;
`;

export const ScrollDetails = styled.ScrollView`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: white;
  margin-top: -75px;
  padding: 25px;
`;

export const Stats = styled.View`
  width: 98%;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #f8f8ff;
  flex-direction: row;
  justify-content: center;
  padding: 10px 7px;
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
    marginTop: "-80%",
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
