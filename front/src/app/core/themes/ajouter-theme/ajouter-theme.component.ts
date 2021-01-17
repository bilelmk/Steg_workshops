import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';
import { MatDialogRef} from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../../../shared/services/http/theme.service';

@Component({
  selector: 'app-ajouter-theme',
  templateUrl: './ajouter-theme.component.html',
  styleUrls: ['./ajouter-theme.component.scss']
})
export class AjouterThemeComponent implements OnInit {

  form ;

  constructor(private themeService : ThemeService ,
              private spinnerService : SpinnerService ,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterThemeComponent>,
  ) {
    this.form = new FormGroup({
      'nom' : new FormControl(null , Validators.required ),
      'description' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    this.spinnerService.activate() ;
    this.themeService.create(this.form.value).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Theme ajouté avec succès" , "green-snackbar")
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
