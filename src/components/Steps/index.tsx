import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './styles';

const Steps: React.FC = () => {
  const { pathname } = useLocation();

  const step = useMemo(() => {
    if (pathname === '/') {
      return 1;
    }
    if (pathname === '/edit') {
      return 2;
    }
    if (pathname === '/checkout') {
      return 3;
    }

    return 0;
  }, [pathname]);

  return (
    <S.Conatiner>
      <S.Step active={step === 1} complete={step > 1}>
        <S.StepNumber>1</S.StepNumber>
        <S.StepText>Escolha do tema</S.StepText>
      </S.Step>
      <S.Step active={step === 2} complete={step > 2}>
        <S.StepNumber>2</S.StepNumber>
        <S.StepText>Editar Caixa</S.StepText>
      </S.Step>
      <S.Step active={step === 3} complete={step > 3}>
        <S.StepNumber>3</S.StepNumber>
        <S.StepText>Finalizar Pedido</S.StepText>
      </S.Step>
    </S.Conatiner>
  );
};

export default Steps;
