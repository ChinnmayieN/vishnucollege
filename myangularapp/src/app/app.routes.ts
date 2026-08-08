import { Routes } from '@angular/router';
import { Fetchdata } from './pages/fetchdata/fetchdata';
import { Header } from './pages/header/header';
import { Navbar } from './pages/navbar/navbar';

export const routes: Routes = [
    {
        path: 'fetchdata',
        component: Fetchdata
    },
    {
        path:'header',
        component:Header
    },
    {
        path:'navbar',
        component:Navbar
    }
];
