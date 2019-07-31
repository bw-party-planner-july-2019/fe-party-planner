import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  ADD_SHOPPING_ITEM_START,
  EDIT_SHOPPING_ITEM_START,
  GET_SHOPPING_ITEM_START,
  GET_SHOPPING_LIST_FAIL,
  GET_SHOPPING_LIST_START,
  GET_SHOPPING_LIST_SUCCESS,
} from './types';
import { partyApiWithAuth as axios } from '../../helpers/axiosConfig';
import { DELETE_PARTY_START } from '../party/types';

export const useShoppingActions = () => {
  const dispatch = useDispatch();

  const fetchShoppingList = useCallback(
    (partyId) => {
      dispatch({ type: GET_SHOPPING_LIST_START });
      axios()
        .get(`/parties/${partyId}/shopping`)
        .then((res) => dispatch(
          { type: GET_SHOPPING_LIST_SUCCESS, payload: res.data }))
        .catch((err) => dispatch(
          { type: GET_SHOPPING_LIST_FAIL, payload: err.response.data }));
    },
    [dispatch],
  );

  const fetchShoppingItem = useCallback(
    (partyId, listId) => {
      dispatch({ type: GET_SHOPPING_ITEM_START });
      axios
        .get(`/parties/${partyId}/shopping/${listId}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    [dispatch],
  );

  const addShoppingItem = useCallback(
    (partyId, item) => {
      dispatch({ type: ADD_SHOPPING_ITEM_START });
      axios
        .post(`/parties/${partyId}/shopping`, item)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    [dispatch],
  );

  const editShoppingItem = useCallback(
    (updatedItem) => {
      dispatch({ type: EDIT_SHOPPING_ITEM_START });
      axios
        .put(`/parties/${updatedItem.partyId}/shopping/${updatedItem.id}`,
          updatedItem)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    [dispatch],
  );

  const deleteShoppingItem = useCallback(
    (partyId, listId) => {
      dispatch({ type: DELETE_PARTY_START });
      axios
        .delete(`/parties/${partyId}/shopping/${listId}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    [dispatch],
  );

  return {
    fetchShoppingItem,
    fetchShoppingList,
    addShoppingItem,
    editShoppingItem,
    deleteShoppingItem,
  };
};
