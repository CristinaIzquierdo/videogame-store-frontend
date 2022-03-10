const urlReg = 'http://localhost:8080/api/users/register';
const urlLog = 'http://localhost:8080/api/users';

const headers = {
  'Content-Type': 'application/json',
};

const register = async (user) => {
  const body = JSON.stringify(user);
  const response = await fetch(urlReg, {
    method: 'POST',
    headers,
    body,
  });

  const result = await response.json();
  console.table('resultado', result);
  if (response.status === 500) {
    throw new Error('Error', result.message);
  }
  return result;
};

const login = async (user) => {
  const body = JSON.stringify(user);
  console.log(body);
  const response = await fetch(urlLog, {
    method: 'POST',
    headers,
    body,
  });
  console.log(body);
  const result = await response.json();
  if (response.status === 500) {
    throw new Error('Error', result.message);
  }
  return result;
};

export { register, login };
