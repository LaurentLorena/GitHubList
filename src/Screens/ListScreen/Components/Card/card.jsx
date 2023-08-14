import React from 'react';

import {
  CardContainer,
  Avatar,
  Title,
  Texts,
  AvatarContainer,
  OwnerContainer,
} from './style';

export const Card = ({data, onPress}) => {
  return (
    <CardContainer onPress={onPress}>
      <AvatarContainer>
        <Avatar testID="avatar" source={{uri: data.owner.avatar_url}} />
      </AvatarContainer>
      <OwnerContainer>
        <Title>{data.name}</Title>
        <Texts>{data.owner.login}</Texts>
      </OwnerContainer>
      <Texts>{data.stargazers_count} stars</Texts>
    </CardContainer>
  );
};
