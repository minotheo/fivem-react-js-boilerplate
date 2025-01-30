import {
  useCallback, useEffect,
} from "react";

export const useKeyHook = (
  handler, dependencies = [], keyCodes = [],
) => {
  const keyDownCallback = useCallback(
    (e) => {
      if (
        keyCodes.includes(
          Number(
            e.keyCode,
          ),
        )
      ) {
        handler(e);
      }
    }, [handler],
  );
  useEffect(() => {
    window.addEventListener(
      'keydown', keyDownCallback,
    );
    return () => {
      window.removeEventListener(
        'keydown', keyDownCallback,
      );
    };
  }, [...dependencies, keyDownCallback]);
};