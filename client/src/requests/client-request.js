import axios from 'axios';

export const client = async (url = '', body = null, auth = null) => {
  const options = {
    method: body ? 'post' : 'get',
    url: url,
  };


  //The token here is broken for some reason
  if (auth) {
    options.headers.Authorization = `Bearer ${auth}`;
  }

  if (body) {
    options.data = JSON.stringify(body);
  }

  const response = await axios(options);

  return response.data;
};
