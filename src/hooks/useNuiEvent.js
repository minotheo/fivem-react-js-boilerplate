import { useCallback, useEffect, useRef } from 'react';
import { noop } from '../utils/misc';

export const useNuiEvent = (action, handler) => {
	const savedHandler = useRef(noop);
	const eventListener = useCallback(
		(event) => {
			const { action: eventAction, data } = event.data;
			if (savedHandler.current) {
				if (eventAction === action) {
					savedHandler.current(data);
				}
			}
		},
		[savedHandler, action]
	);
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);
	useEffect(() => {
		window.addEventListener('message', eventListener);
		return () => {
			window.removeEventListener('message', eventListener);
		};
	}, [action, eventListener]);
};
