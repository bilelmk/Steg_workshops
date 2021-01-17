import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FormationsComponent } from './core/formations/formations/formations.component';
import { FormateursComponent } from './core/formateurs/formateurs/formateurs.component';
import { QuestionsComponent } from './core/formations/questions/questions/questions.component';
import { AgentsComponent } from './core/agents/agents/agents.component';
import { ThemesComponent } from './core/themes/themes/themes.component';
import { EvaluationComponent } from './core/evaluation/evaluation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {
        path: '',
        redirectTo: 'welcome',
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
      {
        path: 'evaluation',
        component : EvaluationComponent
      }
    ]
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
