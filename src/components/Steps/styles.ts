import styled from 'styled-components';

export const Conatiner = styled.section`
  padding: 48px 24px;
  display: flex;
  justify-content: center;
`;

interface StepProps {
  active?: boolean;
}

export const Step = styled.div<StepProps>`
  width: 128px;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  position: relative;

  & + div {
    margin-left: 80px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 10px;
      right: 75px;
      width: 185px;
      height: 4px;
      background: var(--purple);
    }
  }

  @media screen and (max-width: 600px) {
    width: 64px;

    & + div {
      margin-left: 48px;

      &:before {
        right: 44px;
        width: 88px;
      }
    }
  }
`;

export const StepNumber = styled.strong`
  margin: 0 auto;
  width: 24px;
  height: 24px;
  background: var(--purple);
  color: var(--white);
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export const StepText = styled.p`
  color: var(--purple);
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
`;
