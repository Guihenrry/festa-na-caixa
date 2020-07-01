import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

import patternImg from '../../assets/pattern.svg';

const apearFromLeft = keyframes`
  from {
    transform: translate3d(-480px, 0px, 0px) scale(0.8);
  }
  to {
    transform: translate3d(0px, 0px, 0px) scale(1);
  }
`;
const apearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 60px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const animaLeftRight = keyframes`
  from {
    transform: translate3d(2px, 0px, 0px);
  }
  to {
    transform: translate3d(-2px, 0px, 0px);
  }
`;

export const Container = styled.section`
  max-width: var(--container-with-padding);
  margin: 0 auto;
  padding: 0 24px 32px;
  display: flex;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

export const Theme = styled.div`
  border-radius: 16px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  background: url(${patternImg}) var(--purple);
  width: 488px;
  max-width: 100%;
  animation: ${apearFromLeft} 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 360px;
  }
  @media screen and (max-width: 840px) {
    width: auto;
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

export const ThemeActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 32px;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      & + a {
        margin-top: 16px;
      }
      width: 200px;
      border-radius: 8px;
    }
  }
`;

export const PrevStepLink = styled(Link)`
  border: 0;
  border-radius: 0px 8px 8px 0px;
  background: var(--white);
  color: var(--purple);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 16px;
  font-size: 1rem;
  width: 155px;

  &:hover svg {
    animation: ${animaLeftRight} 0.3s alternate infinite ease-in-out;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export const NextStepLink = styled(Link)`
  border: 0;
  border-radius: 8px 0px 0px 8px;
  background: var(--orange);
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 16px;
  font-size: 1rem;
  width: 178px;

  &:hover svg {
    animation: ${animaLeftRight} 0.3s alternate infinite ease-in-out;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`;

export const EditWrapper = styled.section`
  margin-left: 32px;
  animation: ${fadeIn} 1s;
  flex: 1;
  @media screen and (max-width: 840px) {
    margin: 32px 0 0 0;
  }
`;

export const Title = styled.h1`
  color: var(--gray-1);
  font-size: 2rem;
  margin-bottom: 24px;
`;

export const BoxConfigList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 84px);
  gap: 16px;
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(auto-fit, 68px);
  }
`;

export const BoxConfigListItem = styled.li`
  width: 84px;
  height: 84px;
  @media screen and (max-width: 440px) {
    width: 68px;
    height: 68px;
  }
`;

interface BoxConfigButtonProps {
  active?: boolean;
}

export const BoxConfigButton = styled.button<BoxConfigButtonProps>`
  font-size: 0;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid var(--gray-3);
  transition: transform 0.3s;
  color: var(--gray-1);
  outline: 0;

  &:active {
    transform: scale(0.8);
  }

  &:focus {
    border: 1px solid var(--purple);
  }

  &:hover {
    border-color: var(--purple);
  }

  @media screen and (max-width: 440px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--purple);
      color: var(--white);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    `}
`;

export const OptionsWrapper = styled.div``;

export const OptionsTitle = styled.h2`
  color: var(--gray-1);
  font-size: 1.5;
  margin: 48px 0 24px;
  font-weight: 400;
`;

export const Options = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  gap: 16px;
  animation: ${apearFromBottom} 0.6s;
`;

export const Option = styled.li`
  width: 100px;
  height: 144px;
`;

interface OptionButtonProps {
  active?: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
  padding: 24px;
  border: 0;
  background: 0;
  color: var(--gray-1);
  transition: transform 0.3s;
  outline: 0;
  border-radius: 8px 8px 0 0;

  &:active {
    transform: scale(0.8);
  }

  &:focus {
    border: 2px solid var(--gray-3);
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--white);
      border-bottom: 4px solid var(--orange);
      &:focus {
        border: none;
        border-bottom: 4px solid var(--orange);
      }
    `}
`;

export const OptionTitle = styled.strong`
  margin-top: 16px;
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--gray-1);
`;
