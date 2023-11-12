"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

const Modal = ({
  children,
  open,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}) => {
  const childrenContainerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (childrenContainerRef.current) {
      const x = event.clientX;
      const y = event.clientY;

      const { left, top, right, bottom } =
        childrenContainerRef.current.getBoundingClientRect();

      const clickedInside = x > left && x < right && y > top && y < bottom;

      if (clickedInside) {
        return;
      }
      onClose && onClose();
    }
  };

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose && onClose();
      }
    };

    document.addEventListener("keydown", handleEscapePress);

    return () => document.removeEventListener("keydown", handleEscapePress);
  }, [open]);

  return (
    <div
      className={`${open ? "fixed" : "hidden"} inset-0 z-40`}
      onClick={handleOutsideClick}
    >
      <div className="h-full  w-full bg-black opacity-70 duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={childrenContainerRef}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
