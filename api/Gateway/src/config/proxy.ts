import {Application} from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import {Route} from "../routes/routes";

const setupProxies = (app: Application, routes: Route[]) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

export default setupProxies;