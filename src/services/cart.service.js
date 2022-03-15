const url = 'http://localhost:8080/api/cart';
const urlAdd = 'http://localhost:8080/api/cart/add';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
};

const getCart = async () => {
  const request = {
    method: 'GET',
    headers,
  };
  const response = await fetch(url, request);
  if (response.status !== 200) {
    throw new Error('Error', response);
  } else {
    const result = await response.json();
    return result;
  }
};

const createCart = async () => {
  const request = {
    method: 'POST',
    headers,
  };
  const response = await fetch(url, request);
  if (response.status !== 200) {
    throw new Error('Error', response);
  } else {
    const result = await response.json();
    return result;
  }
};

const addGame = async (gameId) => {
  const body = JSON.stringify(gameId);
  const request = {
    method: 'POST',
    headers,
    body,
  };
  const response = await fetch(urlAdd, request);
  if (response.status !== 200) {
    throw new Error('Error ' + response.status);
  } else {
    const result = await response.json();
    return result;
  }
};

export { getCart, createCart, addGame };
