import React, {useState} from 'react';
import {CustomTextInputContainerStyled, InputStyled} from './style';
import {useDispatch} from 'react-redux';
import {setTermToSearch} from '../../../../Services/Redux/github';

export const CustomTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const placeHolder = 'Busca por repositórios';

  const handleBlur = () => {
    dispatch(setTermToSearch(inputValue));
  };

  const handleSubmitEditing = () => {
    dispatch(setTermToSearch(inputValue));
  };

  const handleInputChange = text => {
    setInputValue(text);
  };
  return (
    <CustomTextInputContainerStyled>
      <InputStyled
        placeholder={placeHolder}
        onBlur={handleBlur}
        onSubmitEditing={handleSubmitEditing}
        onChangeText={handleInputChange}
      />
    </CustomTextInputContainerStyled>
  );
};
