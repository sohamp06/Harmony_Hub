interface Route {
    path: string;
    component: string;
}

class Router {
    routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    public _loadInitialRoute(): void { // Make _loadInitialRoute() public
        const pathName = window.location.pathname;
        const initialRoute = this._matchRoute(pathName);
        this._loadRoute(initialRoute);
    }

    private _matchRoute(path: string): Route | undefined {
        return this.routes.find(route => route.path === path);
    }

    private _loadRoute(route: Route | undefined): void {
        if (route) {
            const { component } = route;
            // For demonstration purposes, just displaying route path
            const contentElement = document.getElementById('content');
            if (contentElement) {
                contentElement.innerHTML = `<h2>${route.path}</h2>`;
            }
        }
    }

    public navigateTo(path: string): void {
        const route = this._matchRoute(path);
        if (route) {
            history.pushState({}, '', route.path);
            this._loadRoute(route);
        }
    }
}

const routes: Route[] = []; // Define your routes here

const router = new Router(routes);

window.addEventListener('popstate', () => {
    router._loadInitialRoute();
});

// Example of handling clicks on links
document.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && event.target.dataset.link) {
        event.preventDefault();
        router.navigateTo(event.target.href);
    }
});

export default router;
