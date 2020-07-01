import styled from 'styled-components';
import { Link } from 'react-router-dom';

import patternImg from '../../assets/pattern.svg';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: var(--container-with-padding);
  margin: 0 auto;
  padding: 0 24px 64px 24px;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxDetail = styled.section`
  flex: 1;
  margin: 0 24px 0 0;
  width: 100%;

  @media screen and (max-width: 860px) {
    margin: 0 0 48px 0;
    /* order: 2; */
  }
`;

export const BackLink = styled(Link)`
  color: var(--purple);
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

export const BoxDetailTitle = styled.h1`
  margin-top: 16px;
  margin-bottom: 32px;
  color: var(--gary-1);
  font-size: 2rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1060px) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.img`
  width: 250px;
  margin: 0 48px 0 0;

  @media screen and (max-width: 1060px) {
    margin: 0 auto 48px auto;
  }
`;

export const BoxConfigList = styled.ul`
  flex: 1;
  list-style: none;
  width: 100%;
`;

export const BoxConfig = styled.li`
  padding: 16px;
  background: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  max-width: 280px;

  & + li {
    margin-top: 16px;
  }

  > svg {
    color: var(--gray-1);
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  @media screen and (max-width: 1060px) {
    max-width: none;
  }
`;

export const BoxConfigTitle = styled.strong`
  margin-bottom: 4px;
  color: var(--gray-1);
  font-size: 0.875rem;
`;

export const BoxConfigValue = styled.p`
  color: var(--gray-2);
  font-size: 0.75rem;
`;

export const Payment = styled.section`
  position: relative;
  background: url(${patternImg}) var(--purple);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  width: 384px;
  max-width: 100%;
  padding: 32px;
  margin-left: 104px;
  border-radius: 16px;

  @media screen and (max-width: 540px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 450px) {
    margin: 92px 0 0 0;
  }
`;

export const PaymentTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  margin: 0 0 48px 0;

  @media screen and (max-width: 450px) {
    margin: 92px 0 0 0;
  }
`;

export const Card = styled.div`
  background-color: transparent;
  width: 320px;
  height: 184px;
  perspective: 1000px;
  margin-left: -136px;

  @media screen and (max-width: 540px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 450px) {
    width: 280px;
    position: absolute;
    top: -92px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
`;

interface CardInnerProps {
  showCardBack?: boolean;
}

export const CardInner = styled.div<CardInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.showCardBack ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: var(--gray-2);
  border-radius: 20px;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardData = styled.div`
  color: var(--white);
  width: 100%;
`;

export const CardNumber = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  font-weight: 600;

  span + span {
    margin-left: 16px;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CardName = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 0.75rem;
`;

export const CardExpirationDate = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 0.75rem;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: var(--gray-2);
  border-radius: 20px;

  transform: rotateY(180deg);
`;

export const CardBlackBar = styled.div`
  width: 100%;
  height: 40px;
  background: #000;
  margin-top: 32px;
`;
export const CardCvvLabel = styled.p`
  display: block;
  color: var(--gray-3);
  font-size: 0.75rem;
  text-align: right;
  padding: 8px 24px 8px;
`;

export const CardCvv = styled.p`
  background: var(--white);
  margin: 0 24px;
  border-radius: 4px;
  padding: 8px;
  text-align: right;
  font-size: 0.875rem;
`;

export const PaymentForm = styled.form`
  margin-top: 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  outline: 0;
  width: 100%;
  border: 0;
  background: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 12px 0;
  margin-top: 32px;

  &:focus {
    border-bottom-color: var(--white);
  }

  ~ label {
    cursor: text;
    position: absolute;
    top: 20px;
  }

  &:focus,
  &:valid {
    margin-top: 48px;
    ~ {
      label {
        top: -16px;
        cursor: default;
      }
    }
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--gray-3);
  font-size: 0.875rem;
`;

export const CardFormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  justify-content: space-between;
  align-items: end;
  margin-top: 32px;

  input {
    margin-top: 0;

    &:focus,
    &:valid {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: 1fr 50px;
  }
`;

export const Select = styled.select`
  border: 0;
  background: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 12px 24px 12px 0;
  outline: 0;

  @media screen and (max-width: 380px) {
    padding: 12px 8px 12px 0;
  }

  & + select {
    margin-left: 16px;
  }

  &:focus {
    border-color: var(--white);
  }

  option:disabled {
    color: #999;
    background: var(--gray-3);
  }

  option {
    color: var(--gray-1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: var(--orange);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 14px 16px;
  border: 0;
  color: var(--white);
  font-size: 1.125rem;
  width: 100%;
  font-weight: bold;
  margin-top: 32px;
`;
