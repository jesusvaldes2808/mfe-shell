import { Routes } from '@angular/router';
import { loadRoute, loadComponent } from './core/utils/remote-loader';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: loadRoute('mfe-login', './routesLogin'),
    },
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                outlet: 'menu',
                loadComponent: loadComponent('mfe-menu', './Component', 'AppComponent')
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
