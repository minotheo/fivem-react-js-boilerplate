import { useCallback, useEffect } from 'react';

export const useKeyHook = (handler, dependencies = [], keyCodes = []) => {
	const keyDown = useCallback(
		(e) => {
			if (keyCodes.includes(Number(e.keyCode))) {
				handler(e);
			}
		},
		[handler]
	);
	useEffect(() => {
		window.addEventListener('keydown', keyDown);
		return () => {
			window.removeEventListener('keydown', keyDown);
		};
	}, [...dependencies, keyDown]);
};
