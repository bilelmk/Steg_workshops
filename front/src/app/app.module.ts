import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { FormateursComponent } from './core/formateurs/formateurs/formateurs.component';
import {  FormationsComponent } from './core/formations/formations/formations.component';
import { AgentsComponent } from './core/agents/agents/agents.component';
import { LoginComponent } from './core/login/login.component';
import { EvaluationComponent } from './core/evaluation/evaluation.component';
import { QuestionsComponent } from './core/formations/questions/questions/questions.component';
import { AjouterFormationComponent } from './core/formations/ajouter-formation/ajouter-formation.component';
import { AjouterAgentComponent } from './core/agents/ajouter-agent/ajouter-agent.component';
import { AjouterFormateurComponent } from './core/formateurs/ajouter-formateur/ajouter-formateur.component';
import { AjouterQuestionComponent } from './core/formations/questions/ajouter-question/ajouter-question.component';
import { ThemesComponent } from './core/themes/themes/themes.component';
import { AjouterThemeComponent } from './core/themes/ajouter-theme/ajouter-theme.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { DeleteAgentComponent } from './core/agents/delete-agent/delete-agent.component';
import { DeleteFormateurComponent } from './core/formateurs/delete-formateur/delete-formateur.component';
import { DeleteFormationComponent } from './core/formations/delete-formation/delete-formation.component';
import { DeleteThemeComponent } from './core/themes/delete-theme/delete-theme.component';
import { AjouterChoixComponent } from './core/formations/questions/ajouter-choix/ajouter-choix.component';

import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatRippleModule, MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormateursComponent,
    FormationsComponent,
    AgentsComponent,
    LoginComponent,
    EvaluationComponent,
    QuestionsComponent,
    ThemesComponent,

    SpinnerComponent,

    AjouterFormationComponent,
    AjouterAgentComponent,
    AjouterFormateurComponent,
    AjouterQuestionComponent,
    DeleteAgentComponent,
    DeleteFormateurComponent,
    DeleteFormationComponent,
    DeleteThemeComponent,
    AjouterThemeComponent,
    AjouterChoixComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    NgxSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  entryComponents : [
    AjouterFormationComponent,
    AjouterAgentComponent,
    AjouterFormateurComponent,
    AjouterQuestionComponent,
    DeleteAgentComponent,
    DeleteFormateurComponent,
    DeleteFormationComponent,
    DeleteThemeComponent,
    AjouterThemeComponent,
    QuestionsComponent,
    AjouterChoixComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
