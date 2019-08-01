import axios from 'axios';

export const partyApi = axios.create({
  baseURL: 'https://be-partyplanner.herokuapp.com',
});

export const partyApiWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://be-partyplanner.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
};
