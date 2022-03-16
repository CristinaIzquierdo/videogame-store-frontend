const urlReg = 'http://localhost:8080/api/users/register';
const urlLog = 'http://localhost:8080/api/users';

const headers = {
  'Content-Type': 'application/json',
};
const headerToken = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
};

const register = async (user) => {
  const body = JSON.stringify(user);
  const request = {
    method: 'POST',
    headers,
    body,
  };

  const response = await fetch(urlReg, request);
  return await response.json();
};

const login = async (user) => {
  const body = JSON.stringify(user);
  const request = {
    method: 'POST',
    headers,
    body,
  };
  const response = await fetch(urlLog, request);
  if (response.status === 404) {
    throw new Error('Error', response.message);
  } else {
    return await response.json();
  }
};

const getInfo = async () => {
  const request = {
    method: 'GET',
    headers: headerToken,
  };
  const response = await fetch(urlLog, request);
  return await response.json();
};
export { register, login, getInfo };
