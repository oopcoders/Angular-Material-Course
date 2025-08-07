import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
                data: { breadcrumb: 'Dashboard' }
            },
            {
                path: 'contact',
                loadComponent: () => import('./contact-us-form/contact-us-form.component').then(c => c.ContactUsFormComponent),
                data: { breadcrumb: 'Contact Us' }
            },
            {
                path: 'user',
                loadComponent: () => import('./user-profile-manager/user-profile-manager.component').then(c => c.UserProfileManagerComponent),
                data: { breadcrumb: 'User Profile Manager' }
            },
            {
                path: 'data',
                loadComponent: () => import('./data-display/data-display.component').then(c => c.DataDisplayComponent),
                data: { breadcrumb: 'Data Display' }
            },
            {
                path: 'kanban',
                loadComponent: () => import('./kanban-mini/kanban-mini.component').then(c => c.KanbanMiniComponent),
                data: { breadcrumb: 'Kanban' }
            },
        ]
    }
];
