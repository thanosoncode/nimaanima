import { RefObject, useEffect, useState } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return { width };
};

export const useOutsideClick = <T extends HTMLElement>({
  ref,
  onOutsideClick,
}: {
  ref: RefObject<T>;
  onOutsideClick: () => void;
}) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current) {
      const x = event.clientX;
      const y = event.clientY;

      const { left, top, right, bottom } = ref.current.getBoundingClientRect();

      const clickedInside =
        x > left && x < right && y > top - 122 && y < bottom;

      if (clickedInside) {
        return;
      }
      onOutsideClick();
      return;
    }
  };

  useEffect(() => {
    if (ref) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);
};
