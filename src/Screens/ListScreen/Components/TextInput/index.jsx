import React, {useState} from 'react';
import {CustomTextInputContainerStyled, InputStyled} from './style';
import {useDispatch} from 'react-redux';
import {setTermToSearch} from '../../../../Services/Redux/github';

export const CustomTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleBlur = () => {
    dispatch(setTermToSearch(inputValue));
  };

  const handleSubmitEditing = () => {
    dispatch(setTermToSearch(inputValue));
  };

  const handleInputChange = text => {
    console.log('Typed text:', text);
    setInputValue(text);
  };
  return (
    <CustomTextInputContainerStyled>
      <InputStyled
        placeholder="Busca por repositórios"
        onBlur={handleBlur}
        onSubmitEditing={handleSubmitEditing}
        onChangeText={handleInputChange}
      />
    </CustomTextInputContainerStyled>
  );
};
