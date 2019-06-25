import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { DatosComponent } from './datos/datos.component';
import { TablaComponent } from './tabla/tabla.component';
import { GoogleComponent } from './google/google.component';

// Array de rutas
const appRoutes: Routes = [
	{path: '', component: DatosComponent},
	{path: 'datos', component: DatosComponent},
	{path: 'tabla', component: TablaComponent},
	{path: 'google', component: GoogleComponent},
	{path: '**', component: DatosComponent}
];

// Exportar módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);