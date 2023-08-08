import React from 'react';
import {TextInput} from 'react-native';
import {CustomTextInputContainerStyled} from './style';

export const CustomTextInput = () => {
  return (
    <CustomTextInputContainerStyled>
      <TextInput />
    </CustomTextInputContainerStyled>
  );
};
