import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';
import { FormationService } from '../../../shared/services/http/formation.service';

@Component({
  selector: 'app-delete-formation',
  templateUrl: './delete-formation.component.html',
  styleUrls: ['./delete-formation.component.scss']
})
export class DeleteFormationComponent implements OnInit {

  constructor(private spinnerService : SpinnerService ,
              @Inject(MAT_DIALOG_DATA) private data : any ,
              public matDialogRef: MatDialogRef<DeleteFormationComponent> ,
              public dialog: MatDialog ,
              private snackbarService : SnackbarService,
              private formationService :FormationService
  ) { }

  ngOnInit() {}

  delete() {
    this.spinnerService.activate() ;
    this.formationService.delete(this.data.id).subscribe(
      res => {
        this.snackbarService.openSnackBar('Formation supprimé avec succès' , 'green-snackbar') ;
        this.spinnerService.deactivate() ;
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de suppression' , 'red-snackbar') ;
        this.spinnerService.deactivate() ;
      });
    this.matDialogRef.close()
  }

}
