enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

const queryStringify = (data: object) => {
  return (
    '?' +
    Object.keys(data)
      .map((key) => `${key}=${data[key as keyof typeof data]}`)
      .join('&')
  );
};

type Options = {
  method: METHODS;
  headers?: object;
  data?: unknown;
  timeout?: number;
};

type HTTPMethod = (url: string, options: Options) => Promise<unknown>;

export class HTTPTransport {
  get: HTTPMethod = (url, options) => {
    return this.request(`${url}`, { ...options, method: METHODS.GET }, options.timeout);
  };

  put: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete: HTTPMethod = (url, options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options = { method: METHODS.GET }, timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === METHODS.GET && data) {
        xhr.open(method, `${url}?${queryStringify(data)}`);
      } else {
        xhr.open(method, url);
      }

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key as keyof typeof headers]);
        });
      }

      xhr.onload = () => resolve(xhr);
      xhr.onerror = () => reject(xhr);
      xhr.timeout = timeout;
      xhr.ontimeout = () => reject(new Error('Request timed out'));

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
