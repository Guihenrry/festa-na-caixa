import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
  MouseEvent,
  TouchEvent,
} from 'react';

import * as S from './styles';

import debounce from '../../utils/debounce';

interface SlideItem {
  element: HTMLElement;
  position: number;
}

const Slide: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const [slideItems, setSlideItems] = useState<SlideItem[]>([]);
  const [dist, setDist] = useState({
    translateX: 0,
    startX: 0,
    movement: 0,
    finalPosition: 0,
  });
  const [transition, setTransition] = useState(true);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const prevIndex = useMemo(() => {
    return activeSlideIndex ? activeSlideIndex - 1 : undefined;
  }, [activeSlideIndex]);

  const nextIndex = useMemo(() => {
    const lastIndex = slideItems.length - 1;

    return lastIndex === activeSlideIndex ? undefined : activeSlideIndex + 1;
  }, [activeSlideIndex, slideItems]);

  const generateSlidePosition = useCallback((element: HTMLElement) => {
    if (!wrapperRef.current) return element.offsetLeft;

    const margin = (wrapperRef.current.offsetWidth - element.offsetWidth) / 2;
    return -(element.offsetLeft - margin);
  }, []);

  useEffect(() => {
    const activeClassName = 'active';

    slideItems.forEach((item) => {
      item.element.classList.remove(activeClassName);
    });

    const activeSlide = slideItems[activeSlideIndex];
    if (activeSlide) {
      activeSlide.element.classList.add(activeClassName);
      setDist((state) => ({
        ...state,
        translateX: activeSlide.position,
        finalPosition: activeSlide.position,
      }));
    }
  }, [activeSlideIndex, slideItems]);

  const getSlideItems = useCallback(() => {
    if (slideRef.current) {
      const slideElementsArray = Array.from(
        slideRef.current.children,
      ) as HTMLElement[];

      const slideArray = slideElementsArray.map((element) => {
        const position = generateSlidePosition(element);

        return {
          element,
          position,
        };
      });

      setSlideItems(slideArray);
    }
  }, [generateSlidePosition]);

  useEffect(() => {
    getSlideItems();

    const functionWithDebounce = debounce(getSlideItems, 1000);

    window.addEventListener('resize', functionWithDebounce);

    return () => {
      window.removeEventListener('resize', functionWithDebounce);
    };
  }, [getSlideItems]);

  const onMove = useCallback((event) => {
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX;

    setDist((state) => {
      const movement = (state.startX - pointerPosition) * 1.6;

      return {
        ...state,
        translateX: state.finalPosition - movement,
        movement,
      };
    });
  }, []);

  const onStart = useCallback(
    (startX: number, moveEventName: 'mousemove' | 'touchmove') => {
      setTransition(false);
      setDist((state) => ({ ...state, startX }));
      if (wrapperRef.current) {
        wrapperRef.current.addEventListener(moveEventName, onMove);
      }
    },
    [onMove],
  );

  const resetActiveSlidePosition = useCallback(() => {
    const activeSlide = slideItems[activeSlideIndex];
    setDist((state) => ({
      ...state,
      finalPosition: activeSlide.position,
      translateX: activeSlide.position,
    }));
  }, [slideItems, activeSlideIndex]);

  const changeSlideOnEnd = useCallback(() => {
    if (dist.movement > 120 && nextIndex !== undefined) {
      setActiveSlideIndex((state) => state + 1);
    } else if (dist.movement < -120 && prevIndex !== undefined) {
      setActiveSlideIndex((state) => state - 1);
    } else {
      resetActiveSlidePosition();
    }
  }, [dist.movement, nextIndex, prevIndex, resetActiveSlidePosition]);

  const onEnd = useCallback(
    (moveEventName: 'mousemove' | 'touchmove') => {
      setTransition(true);
      setDist((state) => ({ ...state, finalPosition: state.translateX }));
      changeSlideOnEnd();
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener(moveEventName, onMove);
      }
    },
    [onMove, changeSlideOnEnd],
  );

  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      const startX = event.clientX;
      onStart(startX, 'mousemove');
    },
    [onStart],
  );

  const handleTouchStart = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      const startX = event.changedTouches[0].clientX;
      onStart(startX, 'touchmove');
    },
    [onStart],
  );

  const handleMouseUp = useCallback(() => {
    onEnd('mousemove');
  }, [onEnd]);

  const handleTouchEnd = useCallback(() => {
    onEnd('touchmove');
  }, [onEnd]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <S.Slide
        translateX={dist.translateX}
        transition={transition}
        ref={slideRef}
      >
        {children}
      </S.Slide>
    </S.Wrapper>
  );
};

export default Slide;
