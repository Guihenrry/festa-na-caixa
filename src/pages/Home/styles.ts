import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';
import patternImg from '../../assets/pattern.svg';

const animaLeftRight = keyframes`
  from {
    transform: translate3d(2px, 0px, 0px);
  }
  to {
    transform: translate3d(-2px, 0px, 0px);
  }
`;

export const Themes = styled.section`
  margin: 32px 0;
`;

export const Theme = styled.div`
  border-radius: 16px;
  transition: 0.3s;
  transform: scale(0.8);
  opacity: 0.8;

  > a {
    display: none;
  }

  h2 {
    opacity: 0;
  }

  &.active {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    background: url(${patternImg}) var(--purple);
    transform: scale(1);
    opacity: 1;

    h2 {
      opacity: 1;
    }

    > a {
      display: flex;
    }
  }
`;

export const ThemeTitle = styled.h2`
  color: var(--white);
  padding: 24px;
  text-align: center;
  font-size: 1.125rem;
`;

export const ThemeImage = styled.img`
  margin: 0 auto;
  padding: 0 24px 16px;
`;

export const ThemeLink = styled(Link)`
  border: 0;
  border-radius: 8px 0px 0px 8px;
  background: var(--white);
  color: var(--purple);
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 12px 16px;
  margin-left: auto;
  margin-bottom: 32px;
  font-size: 1rem;
  width: 155px;

  &:hover svg {
    animation: ${animaLeftRight} 0.3s alternate infinite ease-in-out;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`;
