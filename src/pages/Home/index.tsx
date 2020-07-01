import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Slide from '../../components/Slide';

import boxFestaJuninaImg from '../../assets/box-festa-junina.svg';
import boxCircoImg from '../../assets/box-circo.svg';
import boxSavanaImg from '../../assets/box-savana.svg';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Themes>
      <Slide>
        <S.Theme>
          <S.ThemeTitle>Festa Junina</S.ThemeTitle>
          <S.ThemeImage src={boxFestaJuninaImg} alt="Caixa Festa Junina" />
          <S.ThemeLink to="/edit">
            Editar caixa
            <FiArrowRight />
          </S.ThemeLink>
        </S.Theme>
        <S.Theme>
          <S.ThemeTitle>Circo</S.ThemeTitle>
          <S.ThemeImage src={boxCircoImg} alt="Caixa Circo" />
          <S.ThemeLink to="/edit">
            Editar caixa
            <FiArrowRight />
          </S.ThemeLink>
        </S.Theme>
        <S.Theme>
          <S.ThemeTitle>Savana</S.ThemeTitle>
          <S.ThemeImage src={boxSavanaImg} alt="Caixa Savana" />
          <S.ThemeLink to="/edit">
            Editar caixa
            <FiArrowRight />
          </S.ThemeLink>
        </S.Theme>
      </Slide>
    </S.Themes>
  );
};

export default Home;
