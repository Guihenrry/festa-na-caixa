import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './styles';

const Steps: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <S.Conatiner>
      <S.Step active={pathname.includes('/')}>
        <S.StepNumber>1</S.StepNumber>
        <S.StepText>Escolha do tema</S.StepText>
      </S.Step>
      <S.Step active={pathname.includes('/edit')}>
        <S.StepNumber>2</S.StepNumber>
        <S.StepText>Editar Caixa</S.StepText>
      </S.Step>
      <S.Step>
        <S.StepNumber>3</S.StepNumber>
        <S.StepText>Finalizar Pedido</S.StepText>
      </S.Step>
    </S.Conatiner>
  );
};

export default Steps;
