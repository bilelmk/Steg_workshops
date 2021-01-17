import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormationService } from '../../../shared/services/http/formation.service';
import { FormateurService } from '../../../shared/services/http/formateur.service';
import { ThemeService } from '../../../shared/services/http/theme.service';
import { Formateur } from '../../../shared/classes/Formateur';
import { Theme } from '../../../shared/classes/Theme';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.scss']
})
export class AjouterFormationComponent implements OnInit {

  form ;
  themes = [] ;
  formateurs = [] ;

  constructor(private formationService : FormationService ,
              private formateurService : FormateurService ,
              private themeService : ThemeService ,
              private spinnerService : SpinnerService ,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterFormationComponent>,
  ) {
    this.form = new FormGroup({
      'nom' : new FormControl(null , Validators.required ),
      'description' : new FormControl(null , Validators.required ),
      'duree' : new FormControl(null , Validators.required ),
      'formateur' : new FormControl(null , Validators.required ),
      'theme' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
    this.spinnerService.activate() ;
    this.formateurService.getAll().subscribe(
      res => {
        this.formateurs = res ;
        this.spinnerService.deactivate() ;
      },
      err => {
        this.spinnerService.deactivate() ;
      }
    )

    this.spinnerService.activate() ;
    this.themeService.getAll().subscribe(
      res => {
        this.themes = res
        this.spinnerService.deactivate() ;
      },
      err => {
        this.spinnerService.deactivate() ;
      }
    )
  }

  onSave() {
    let formateur = new Formateur ;
    let theme = new Theme ;
    let formation = this.form.value ;
    formateur.id = this.form.value.formateur ;
    theme.id = this.form.value.theme ;
    formation.theme = theme ;
    formation.formateur = formateur ;

    this.spinnerService.activate() ;
    this.formationService.create(this.form.value).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Formation ajouté avec succès" , "green-snackbar")
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
