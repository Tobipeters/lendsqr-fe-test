import React from "react";

interface IOutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
}

export const useOutsideClick = ({ ref, handler }: IOutsideClickHandlerProps) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};

