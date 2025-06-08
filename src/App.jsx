import React, { useEffect } from 'react';
import Base from './interfaces/Base';
import { useDispatch } from 'react-redux';
import { useNuiEvent } from './hooks/useNuiEvent';
import { fetchNui } from './utils/nui';

const App = () => {
	const dispatch = useDispatch();
	useNuiEvent('callStoreEvent', ({ type, payload }) => {
		const actionPayload = {
			payload,
			type: `mainSlice/${type}`,
		};
		dispatch(actionPayload);
	});
	useEffect(() => {
		fetchNui('webReady').then();
	}, []);
	return [<Base key={'base'} />].map((item) => item);
};

export default App;
