const url = 'http://localhost:8080/api/cart';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
};

const getCart = async () => {
  const response = await fetch(url, {
    headers,
  });
  const result = await response.json();
  if (response.status === 500) {
    throw new Error('Error', result.message);
  } else {
    console.log(result);
    return result;
  }
};

const createCart = async () => {
  getCart();
  console.log('carro', getCart.result);
  if (getCart.result === `doesn't have a cart`) {
    const response = await fetch(url, {
      method: 'POST',
      headers,
    });
    const result = await response.json();
    if (response.status === 500) {
      throw new Error('Error', result.message);
    } else {
      return result;
    }
  } else {
    return createCart.result;
  }
};

export { createCart };
