import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

interface SlideProps {
  translateX: number;
  transition: boolean;
}

export const Slide = styled.div.attrs((props: SlideProps) => ({
  style: {
    transition: props.transition ? '.3s transform' : '',
    transform: `translate3d(${props.translateX}px, 0, 0)`,
  },
}))<SlideProps>`
  display: flex;

  &:hover {
    will-change: transform;
  }

  > div {
    width: 80vw;
    flex-shrink: 0;
    max-width: 800px;
    opacity: 0.8;
    transform: scale(0.8);
    transition: 0.4s;
  }

  > div.active {
    opacity: 1;
    transform: scale(1);
  }
`;
