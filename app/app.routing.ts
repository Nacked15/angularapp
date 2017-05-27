import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add.component';

const appRoutes: Routes = [
    { path: '', component: FavoritosListComponent }, //url vacio
    { path:'marcador/:id', component: FavoritoDetailComponent },
    { path:'crear-marcador', component: FavoritoAddComponent },
    { path:'**', component: FavoritosListComponent } //url con 404 code
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);