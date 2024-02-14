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
};

const ROUTES: Route[] = [
    {
        url: "/micro*",
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://micro:5001",
            changeOrigin: true,
            pathRewrite: {
                [`^/micro`]: "",
            },
        },
    },
    {
        url: "/api/cart*",
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://cart-service.bsp.svc.cluster.local:83",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/cart`]: "",
            },
        },
    },
    {
        url: "/api/products*",
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://products-service.bsp.svc.cluster.local:82",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/products`]: "",
            },
        },
    },
    {
        url: "/api/stocks*",
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://stocks-service.bsp.svc.cluster.local:81",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/stocks`]: "",
            },
        },
    },
];

export default ROUTES;
