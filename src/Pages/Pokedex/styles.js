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
`

// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   logo: {
//     flex: 1,
//     width: '100%',
//     paddingVertical: 60,
//     alignItems: 'center',
//   },

//   srollContainer: {
//     flex: 2,
//     maxHeight: '80%',
//     width: "100%",
//     marginTop: 50,
//   },

//   loadMore: {
//     alignSelf: 'center',
//     fontSize: 18,
//   }
// });

// export default styles
