import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../shared/services/in-app/spinner.service';
import { QuestionService }  from '../../../../shared/services/http/question.service';
import { SnackbarService } from '../../../../shared/services/in-app/snackbar.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Formation } from '../../../../shared/classes/Formation';

@Component({
  selector: 'app-ajouter-question',
  templateUrl: './ajouter-question.component.html',
  styleUrls: ['./ajouter-question.component.scss']
})
export class AjouterQuestionComponent implements OnInit {

  form ;

  constructor(private spinnerService : SpinnerService ,
              private questionService : QuestionService,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterQuestionComponent> ,
              @Inject(MAT_DIALOG_DATA) private data : any
  ) {
    this.form = new FormGroup({
      'content' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    let question = this.form.value;
    let formation = new Formation ;
    formation.id = this.data.id ;
    question.formation = formation ;
    this.spinnerService.activate() ;
    this.questionService.create(question).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Question ajoutée avec succès" , "green-snackbar")
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      },
      err => {
        this.snackBarservice.openSnackBar("Erreur lors de l'ajout" , "red-snackbar")
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      }
    )
  }
}
