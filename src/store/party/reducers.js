import {
  GET_ALL_PARTIES_FAIL,
  GET_ALL_PARTIES_START,
  GET_ALL_PARTIES_SUCCESS,
  GET_SINGLE_PARTY_FAIL,
  GET_SINGLE_PARTY_START,
  GET_SINGLE_PARTY_SUCCESS,
} from './types';

const initialState = {
  parties: [],
  party: {},
  isLoading: false,
  errors: null,
};

export const eventsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ALL_PARTIES_START:
      return {...state, isLoading: true, errors: null};
    case GET_ALL_PARTIES_SUCCESS:
      return {...state, isLoading: false, parties: payload, errors: null};
    case GET_ALL_PARTIES_FAIL:
      return {...state, isLoading: false, parties: [], errors: payload};
    case GET_SINGLE_PARTY_START:
      return {...state, isLoading: true, errors: null};
    case GET_SINGLE_PARTY_SUCCESS:
      return {...state, isLoading: false, errors: null, party: payload};
    case GET_SINGLE_PARTY_FAIL:
      return {...state, isLoading: false, errors: payload, party: {}};
    default:
      return state;
  }
};
