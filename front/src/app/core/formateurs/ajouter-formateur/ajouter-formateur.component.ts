import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';
import { MatDialogRef } from '@angular/material';
import { FormateurService } from '../../../shared/services/http/formateur.service';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.scss']
})
export class AjouterFormateurComponent implements OnInit {

  form ;

  constructor(private formateurService : FormateurService ,
              private spinnerService : SpinnerService ,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterFormateurComponent>,
  ) {
    this.form = new FormGroup({
      'nom' : new FormControl(null , Validators.required ),
      'prenom' : new FormControl(null , Validators.required ),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'cin' : new FormControl(null , [Validators.required ]),
      'telephone' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    this.spinnerService.activate() ;
    this.formateurService.create(this.form.value).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Formateur ajouté avec succès" , "green-snackbar")
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
