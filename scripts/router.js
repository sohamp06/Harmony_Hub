"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    routes;
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }
    _loadInitialRoute() {
        const pathName = window.location.pathname;
        const initialRoute = this._matchRoute(pathName);
        this._loadRoute(initialRoute);
    }
    _matchRoute(path) {
        return this.routes.find(route => route.path === path);
    }
    _loadRoute(route) {
        if (route) {
            const { component } = route;
            const contentElement = document.getElementById('content');
            if (contentElement) {
                contentElement.innerHTML = `<h2>${route.path}</h2>`;
            }
        }
    }
    navigateTo(path) {
        const route = this._matchRoute(path);
        if (route) {
            history.pushState({}, '', route.path);
            this._loadRoute(route);
        }
    }
}
const routes = [];
const router = new Router(routes);
window.addEventListener('popstate', () => {
    router._loadInitialRoute();
});
document.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && event.target.dataset.link) {
        event.preventDefault();
        router.navigateTo(event.target.href);
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map