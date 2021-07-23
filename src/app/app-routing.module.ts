import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    // Setting for main route 
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    // Setting for region route
    {
        path: 'region',
        component: PorRegionComponent
    },
    // Setting for capital route
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    // Setting for verPais route with a dynamic argument 
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    // Setting an invalid route
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        // Setting the main route configuration 
        RouterModule.forRoot( routes )
    ],
    exports: [
        // Set and export RouterModule
        RouterModule
    ]
})

export class AppRoutingModule{}