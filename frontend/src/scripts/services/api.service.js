const BASE_URL = 'localhost:8080/api/';

export function get(url) {
  return fetch(BASE_URL + url);
}

export function post(url, object) {
  return fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
