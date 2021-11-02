import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: 'area', component: AreaComponent },
   { path: 'home', component: HomeComponent },
   { path: 'adduser', component: AdduserComponent },
   { path: 'edituser', component: EdituserComponent },
   { path: 'observable', component:ObservableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
