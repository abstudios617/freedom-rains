import axios from 'axios';

export const client = async (url = '', body = null, auth = null) => {
  const options = {
    method: body ? 'post' : 'get',
    url: url,
  };

  if (auth) {
    options.headers.Authorization = `Bearer ${auth}`;
  }

  if (body) {
    options.data = JSON.stringify(body);
  }

  const response = await axios(options);

  return response.data;
};
