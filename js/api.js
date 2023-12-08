async function request (url, method, body = null) {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}

async function loadPicture () {
  return request('https://30.javascript.pages.academy/kekstagram/data', 'GET');
}

async function sendPicture (data) {
  return request('https://30.javascript.pages.academy/kekstagram/', 'POST', data);
}


export { loadPicture, sendPicture };
