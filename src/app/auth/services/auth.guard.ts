import {CanActivateFn, CanMatchFn, Route, UrlSegment} from '@angular/router';

export const isAuthenticated: CanActivateFn = (route, state) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return false;
    }
    return false;
};

export const isNotAuthenticatedForLoadModule: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const token = localStorage.getItem('token');
    return !token;
}

export const isAuthenticatedForLoadModule: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const token = localStorage.getItem('token');
    return !!token;
}
