import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './Components/user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'user', component: UserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);