import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {AddToolFormComponent} from './add-tool-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/addtools', pathMatch: 'full' },
  { path: 'home',  component: AppComponent },
  { path: 'publictools',  component: AppComponent },
  { path: 'minetools',  component: AppComponent },
  { path: 'addtools',  component: AddToolFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
