const {View, SafeAreaView} = require('react-native');
const {styled} = require('styled-components');

export const CustomTextInputContainerStyled = styled(View)`
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const InputStyled = styled.TextInput`
  border-color: gray;
  background-color: lightgray;
  padding: 8px;
  border-radius: 8px;
`;

export const ListScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: 'white';
`;
