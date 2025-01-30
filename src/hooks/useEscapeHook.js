import {
  useCallback, useEffect,
} from "react";

export const useEscapeHook = (
  handler, dependencies = [],
) => {
  const onKeyDownCallback = useCallback(
    (e) => {
      if (e.keyCode === 77 || e.keyCode === 27) {
        handler();
      }
    }, [handler],
  );
  useEffect(() => {
    window.addEventListener(
      'keydown', onKeyDownCallback,
    );
    return () => {
      window.removeEventListener(
        'keydown', onKeyDownCallback,
      );
    };
  }, [...dependencies, onKeyDownCallback]);
};