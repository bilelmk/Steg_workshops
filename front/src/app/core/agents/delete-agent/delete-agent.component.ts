import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { AgentService } from '../../../shared/services/http/agent.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../shared/services/in-app/snackbar.service';

@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.scss']
})
export class DeleteAgentComponent implements OnInit {

  constructor(private spinnerService : SpinnerService ,
              private agentservice : AgentService ,
              @Inject(MAT_DIALOG_DATA) private data : any ,
              public matDialogRef: MatDialogRef<DeleteAgentComponent> ,
              public dialog: MatDialog ,
              private snackbarService : SnackbarService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.spinnerService.activate() ;
    this.agentservice.delete(this.data.id).subscribe(
      res => {
        this.snackbarService.openSnackBar('Agent supprimé avec succès' , 'green-snackbar') ;
        this.spinnerService.deactivate() ;
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de suppression' , 'red-snackbar') ;
        this.spinnerService.deactivate() ;
      });
    this.matDialogRef.close()
  }
}
