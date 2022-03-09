const url = 'http://localhost:8080/api/games';
const headers = {
  'Content-Type': 'application/json',
};

const getGames = async () => {
  const response = await fetch(url, {
    headers,
  });
  const result = await response.json();
  if (response.status === 500) {
    throw new Error('Error', result.message);
  } else {
    return result;
  }
};

export { getGames };
