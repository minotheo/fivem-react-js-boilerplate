import {
  useCallback, useEffect,
} from "react";

export const useEscHook = (
  handler, dependencies = [],
) => {
  const keyDown = useCallback(
    (e) => {
      if (e.keyCode === 77 || e.keyCode === 27) {
        handler();
      }
    }, [handler],
  );
  useEffect(
    () => {
      window.addEventListener(
        'keydown', keyDown,
      );
      return () => {
        window.removeEventListener(
          'keydown', keyDown,
        );
      };
    }, [...dependencies, keyDown],
  );
};