import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
	GET_ALL_PARTIES_START,
	GET_SINGLE_PARTY_START,
	ADD_PARTY_START,
	UPDATE_PARTY_START,
	DELETE_PARTY_START,
} from './types';
import { partyApiWithAuth as axios } from '../../helpers/axiosConfig';

export const usePartyActions = () => {
	const dispatch = useDispatch();

	const fetchParties = useCallback(
		() => {
			dispatch({ type: GET_ALL_PARTIES_START });
			axios.get('/parties/').then((res) => console.log(res.data)).catch((err) => console.log(err));
		},
		[ dispatch ],
	);

	const fetchParty = useCallback(
		(id) => {
			dispatch({ type: GET_SINGLE_PARTY_START });
			axios.get(`/parties/${id}`).then((res) => console.log(res.data)).catch((err) => console.log(err));
		},
		[ dispatch ],
	);

	const addParty = useCallback(
		(newParty) => {
			dispatch({ type: ADD_PARTY_START });
			axios.post('/parties/', newParty).then((res) => console.log(res.data)).catch((err) => console.log(err));
		},
		[ dispatch ],
	);

	const editParty = useCallback(
		(updatedParty) => {
			dispatch({ type: UPDATE_PARTY_START });
			axios
				.put(`/parties/${updatedParty.id}`, updatedParty)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
		},
		[ dispatch ],
	);

	const deleteParty = useCallback(
		(id) => {
			dispatch({ type: DELETE_PARTY_START });
			axios.delete(`/parties/${id}`).then((res) => console.log(res.data)).catch((err) => console.log(err));
		},
		[ dispatch ],
	);

	return { fetchParties, fetchParty, addParty, editParty, deleteParty };
};
