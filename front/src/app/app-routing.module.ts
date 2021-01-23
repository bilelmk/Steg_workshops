import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FormationsComponent } from './core/formations/formations/formations.component';
import { FormateursComponent } from './core/formateurs/formateurs/formateurs.component';
import { AgentsComponent } from './core/agents/agents/agents.component';
import { ThemesComponent } from './core/themes/themes/themes.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {
        path: '',
        redirectTo: 'agents',
        pathMatch: 'full',
      },
      {
        path: 'formations',
        component : FormationsComponent
      },
      {
        path: 'formateurs',
        component : FormateursComponent
      },
      {
        path: 'agents',
        component : AgentsComponent
      },
      {
        path: 'themes',
        component : ThemesComponent
      },
    ]
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
