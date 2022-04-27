import styled  from "styled-components/native"
import { colorTypesSelector } from "../../utils/colorTypesSelector";

export const TouchableContainer = styled.TouchableOpacity`
  background-color: ${props => colorTypesSelector(props.typeBackgroundColor).replace(/"/g, "")};
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;

  width: 80%;
  height: 150px;
  padding: 5px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const DataContainer = styled.View`
`;

export const Name = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const Type = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  background-color: ${props => colorTypesSelector(props.typeColor)};
  margin: 3px;
  border-radius: 15px;
  padding: 4px;
  text-align: center;
`;

export const PokeBallBackground = styled.ImageBackground`
  width: 90px;
  height: 90px;
`;

export const PokeId = styled.Text`
  opacity: .5;
`;

export const PokeSprite = styled.Image`
  width: 100px;
  height: 100px;
`;

export const LoaderIcon = styled.Image`
  width: 90px;
  height: 90px;
`;
