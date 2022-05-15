import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  ${StatusBar.setBackgroundColor("#fc474d")}
  ${StatusBar.setBarStyle('light-content')}
  padding-top: ${20 + StatusBar.currentHeight};
  padding-left: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const TitleContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: center;
  
`
export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  font-family: Roboto;
  color: #fc474d;
  height: 100px;
`;

export const Input = styled.TextInput`
  width: 300px;
  margin-top: 10px;
  padding: 10px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #fc474d;
  margin-left: auto;
  margin-right: auto;
  color: #4d5156;
`;

export const Alert = styled.Text`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #fc474d;
  align-items: center;
  justify-content: center;
  margin: 15px;
  border-radius: 50px;
`;

export const ButtonTitle = styled.Text`
  font-family: Roboto;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const RegisterLabel = styled.Text`
  color: #4d5156;
  font-family: Roboto;
`;

export const RegisterLink = styled.Text`
  color: dodgerblue;
  padding-left: 10px;
`;  

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`
