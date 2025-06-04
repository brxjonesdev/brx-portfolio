import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: unknown) => {
      if (
        !ref.current ||
        !(event instanceof MouseEvent || event instanceof TouchEvent) ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
