// route.ts

interface Route {
    path: string;
    component: string;
}

const routes: Route[] = [
    { path: '/', component: 'home.html' },
    { path: '/blog', component: 'blog.html' },
    { path: '/contact', component: 'contact.html' },
    { path: '/event', component: 'event.html' },
    { path: '/gallery', component: 'gallery.html' },
    { path: '/home', component: 'home.html' },
    { path: '/login', component: 'login.html' },
    { path: '/portfolio', component: 'portfolio.html' },
    { path: '/privacy-policy', component: 'privacy-policy.html' },
    { path: '/register', component: 'register.html' },
    { path: '/services', component: 'services.html' },
    { path: '/statistics', component: 'statistics.html' },
    { path: '/team-page', component: 'team-page.html' },
    { path: '/terms-of-service', component: 'terms-of-service.html' }
];

export default routes;
