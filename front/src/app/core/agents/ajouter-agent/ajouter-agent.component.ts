import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../../../shared/services/http/agent.service';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ajouter-agent',
  templateUrl: './ajouter-agent.component.html',
  styleUrls: ['./ajouter-agent.component.scss']
})
export class AjouterAgentComponent implements OnInit {

  form ;

  constructor(private agentService : AgentService ,
              private spinnerService : SpinnerService ,
              private snackBarservice : SnackbarService ,
              private matDialogRef: MatDialogRef<AjouterAgentComponent>,
  ) {
    this.form = new FormGroup({
      'nom' : new FormControl(null , Validators.required ),
      'prenom' : new FormControl(null , Validators.required ),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'cin' : new FormControl(null , [Validators.required ]),
      'telephone' : new FormControl(null , Validators.required ),
      'adresse' : new FormControl(null , Validators.required ),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    this.spinnerService.activate() ;
    this.agentService.create(this.form.value).subscribe(
      res => {
        this.snackBarservice.openSnackBar("Agent ajouté avec succès" , "green-snackbar")
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
