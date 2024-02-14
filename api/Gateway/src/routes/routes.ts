import {RequestHandler} from 'express';

export type Proxy = {
  target: string;
  changeOrigin: boolean;
  pathRewrite: {
    [key: string]: string;
  };
};

export type Route = {
  url: string;
  auth: boolean;
  creditCheck: boolean;
  proxy: Proxy;
  middleware?: RequestHandler[];
};

const ROUTES: Route[] = [
  {
    url: '/micro*',
    auth: false,
    creditCheck: false,
    proxy: {
      target: 'http://micro:5001',
      changeOrigin: true,
      pathRewrite: {
        [`^/micro`]: '',
      },
    },
  },
  {
    url: '/cart*',
    auth: false,
    creditCheck: false,
    proxy: {
      target: 'http://cart:5002',
      changeOrigin: true,
      pathRewrite: {
        [`^/cart`]: '',
      },
    },
  },
  {
    url: '/products*',
    auth: false,
    creditCheck: false,
    proxy: {
      target: 'http://products:5003',
      changeOrigin: true,
      pathRewrite: {
        [`^/products`]: '',
      },
    },
  },
  {
    url: '/stocks*',
    auth: false,
    creditCheck: false,
    proxy: {
      target: 'http://stocks:5004',
      changeOrigin: true,
      pathRewrite: {
        [`^/stocks`]: '',
      },
    },
  },
];


export default ROUTES;
