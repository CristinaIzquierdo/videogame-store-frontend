const url = 'http://localhost:8080/api/users/register';
const headers = {
  'Content-Type': 'application/json',
};

const register = async (user) => {
  const body = JSON.stringify(user);
  const respone = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
  const result = await respone.json();
  console.table('resultado', result);
  if (respone.status === 500) {
    throw new Error('Error', result.message);
  }
  return result;
};
export { register };
