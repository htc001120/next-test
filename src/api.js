const searchItems = (keyword = '') => {
  const url = new URL('https://itunes.apple.com/search');
  url.search = new URLSearchParams({
    term: keyword,
    country: 'GB',
  }).toString();
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
};

const Api = {
  searchItems,
};

export default Api;
