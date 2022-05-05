import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
})`
  margin-top: 20px;
  flex: 2;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled.Text`
  align-self: center;
  font-size: 18px;
`;

export const LoaderIcon = styled.Image`
  align-self: center;
  margin-top: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
`;
