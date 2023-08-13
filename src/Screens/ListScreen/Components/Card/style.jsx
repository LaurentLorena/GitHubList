import styled from 'styled-components/native';
import {TouchableOpacity, Image} from 'react-native';

export const CardContainer = styled(TouchableOpacity)`
  background-color: white;
  padding: 16px;
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 52px;
  height: 52px;
  border-radius: 52px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const OwnerContainer = styled.View`
  flex: 1;
  margin-top: 4px;
`;

export const Texts = styled.Text`
  font-size: 14px;
  color: '#48484A';
  margin-top: 4px;
`;
