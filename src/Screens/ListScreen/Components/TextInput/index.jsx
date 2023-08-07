import React from 'react';
import {TextInput, View} from 'react-native';
import {CustomTextInputContainerStyled} from './style';

export const CustomTextInput = () => {
  return (
    <CustomTextInputContainerStyled>
      <TextInput />
    </CustomTextInputContainerStyled>
  );
};
