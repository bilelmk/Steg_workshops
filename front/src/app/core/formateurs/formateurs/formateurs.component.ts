import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { Formateur } from '../../../shared/classes/Formateur';
import { FormateurService } from '../../../shared/services/http/formateur.service';
import { AjouterFormateurComponent } from '../ajouter-formateur/ajouter-formateur.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {

  formateurs : Formateur[] = [] ;
  public dataSource = new MatTableDataSource<Formateur>();
  displayedColumns = ['nom', 'prenom' , 'email' , 'cin' , 'telephone' ];

  constructor(private formateurService : FormateurService ,
              private spinnerService: SpinnerService ,
              public dialog: MatDialog) { }

  ngOnInit(): void {
   this.getFormateur() ;
  }

  openAjouterFormateurModal() {
    const dialogRef = this.dialog.open(AjouterFormateurComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getFormateur() ;
      }
    )
  }

  getFormateur(){
    this.spinnerService.activate() ;
    this.formateurService.getAll().subscribe(
      res => {
        this.formateurs = res ;
        this.dataSource = new MatTableDataSource<Formateur>(this.formateurs);
        this.spinnerService.deactivate()
      },
      error => {
        console.log(error)
        this.spinnerService.deactivate()
      }
    )
  }

}
