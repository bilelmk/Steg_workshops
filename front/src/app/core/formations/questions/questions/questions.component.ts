import { Component, Inject, OnInit } from '@angular/core';
import { AjouterQuestionComponent } from '../ajouter-question/ajouter-question.component';
import { SpinnerService } from '../../../../shared/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { QuestionService } from '../../../../shared/services/http/question.service';
import { SnackbarService } from '../../../../shared/services/in-app/snackbar.service';
import { ChoixService } from '../../../../shared/services/http/choix.service';
import {AjouterChoixComponent} from '../ajouter-choix/ajouter-choix.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = [] ;

  constructor(private spinnerService: SpinnerService ,
              public dialog: MatDialog ,
              @Inject(MAT_DIALOG_DATA) private data : any ,
              public matDialogRef: MatDialogRef<QuestionsComponent> ,
              private questionService : QuestionService ,
              private snackBarservice : SnackbarService ,
              private choixService : ChoixService) { }

  ngOnInit(): void {
    this.getQuestions() ;
  }

  openAjouterQuestionModal() {
    const dialogRef = this.dialog.open(AjouterQuestionComponent, {
      panelClass: 'custom-dialog-container' ,width: '700px', height: '300px' , data: {id: this.data.id}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getQuestions() ;
      }
    )
  }

  getQuestions() {
    this.spinnerService.activate() ;
    this.questionService.getAllByFormation(this.data.id).subscribe(
      res => {
        console.log(res)
        this.spinnerService.deactivate() ;
        this.questions = res
      },
      error => {
        this.spinnerService.deactivate() ;
      }
    )
  }


  onDeleteQuestion(id : number) {
    this.spinnerService.activate() ;
    this.questionService.delete(id).subscribe(
      res => {
        this.spinnerService.deactivate() ;
        this.snackBarservice.openSnackBar("Question supprimée avec succès" , "green-snackbar")
        this.getQuestions() ;
      },
      error => {
        this.spinnerService.deactivate() ;
        this.snackBarservice.openSnackBar("Erreur lors de la suppresssion" , "red-snackbar")
      }
    )
  }

  onDeleteChoix(id : number) {
    this.spinnerService.activate() ;
    this.choixService.delete(id).subscribe(
      res => {
        this.spinnerService.deactivate() ;
        this.snackBarservice.openSnackBar("Choix supprimée avec succès" , "green-snackbar")
        this.getQuestions() ;
      },
      error => {
        this.spinnerService.deactivate() ;
        this.snackBarservice.openSnackBar("Erreur lors de la suppresssion" , "red-snackbar")
      }
    )
  }

  openAjouterChoixModal(id: any) {
    console.log(id)
    const dialogRef = this.dialog.open(AjouterChoixComponent, {
      panelClass: 'custom-dialog-container' ,width: '700px', height: '300px' , data: { id : id }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getQuestions() ;
      }
    )
  }
}

