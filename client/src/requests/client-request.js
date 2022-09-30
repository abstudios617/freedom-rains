import axios from 'axios';

export const client = async (url = '', body = null, wildcards = null) => {
  const options = {
    method: body ? 'post' : 'get',
    url: url,
    withCredentials: true
  };

  if (wildcards)
  {
    switch (wildcards.key) {
      case "printful":
        options.headers = {
          "Authorization": `Bearer ${wildcards.value}`
        };
        break;
      case "update":
        options.method = "update";
        break;
    }
  }

  if (body) {
    // options.headers['Content-Type'] = 'application/json';
    options.data = JSON.stringify(body);
  }

  const response = await axios(options);
  response.data.statusCode = response.status;
  return response.data;
};
