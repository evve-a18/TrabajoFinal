import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RickandmortyPageComponent } from './pages/rickandmorty-page/rickandmorty-page.component';
import { RickMortyEpisodesComponent } from './pages/rick-morty-episodes/rick-morty-episodes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'characters',
        component: RickandmortyPageComponent
    },
    {
        path:'episodes',
        component:RickMortyEpisodesComponent
    }
];
