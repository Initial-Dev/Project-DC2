export type Proxy = {
    target: string;
    changeOrigin: boolean;
    pathRewrite: {
        [key: string]: string;
    }
}

export type Route = {
    url: string;
    auth: boolean;
    creditCheck: boolean;
    proxy: Proxy;
}

const ROUTES : Route[] = [
    {
        url: '/micro*',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://micro:5001",
            changeOrigin: true,
            pathRewrite: {
                [`^/micro`]: '',
            },
        }
    },
    {
        url: '/cart*',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://cart:5002",
            changeOrigin: true,
            pathRewrite: {
                [`^/cart`]: '',
            },
        }
    }
]

export default ROUTES;