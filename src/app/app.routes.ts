import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.routes').then(p => p.routes)
    },
    { path: '**', component: PageNotFoundComponent }
];
