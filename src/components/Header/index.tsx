import React from 'react';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </S.Container>
    </S.Header>
  );
};

export default Header;
