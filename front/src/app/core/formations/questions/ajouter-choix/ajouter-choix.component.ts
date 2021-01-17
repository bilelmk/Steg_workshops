import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from '../../../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../../../shared/services/in-app/snackbar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChoixService } from '../../../../shared/services/http/choix.service';
import { Question } from '../../../../shared/classes/Question';

@Component({
  selector: 'app-ajouter-choix',
  templateUrl: './ajouter-choix.component.html',
  styleUrls: ['./ajouter-choix.component.scss']
})
export class AjouterChoixComponent implements OnInit {

  form ;

  constructor(private spinnerService : SpinnerService ,
              private choixService : ChoixService,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterChoixComponent> ,
              @Inject(MAT_DIALOG_DATA) private data : any
  ) {
    this.form = new FormGroup({
      'content' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    let choix = this.form.value;
    let question = new Question() ;
    question.question_id = this.data.id ;
    choix.question = question ;
    console.log(choix)
    this.spinnerService.activate() ;
    this.choixService.create(choix).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Choix ajoutée avec succès" , "green-snackbar")
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
