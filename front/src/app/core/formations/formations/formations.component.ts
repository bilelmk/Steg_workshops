import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterFormationComponent } from '../ajouter-formation/ajouter-formation.component';
import { MatTableDataSource } from '@angular/material';
import { Formation } from '../../../shared/classes/Formation';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { FormationService } from '../../../shared/services/http/formation.service';
import { DeleteFormationComponent } from '../delete-formation/delete-formation.component';
import { QuestionsComponent } from '../questions/questions/questions.component';
import {EvaluationComponent} from '../evaluation/evaluation.component';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {


  formations : Formation[] = [] ;
  public dataSource = new MatTableDataSource<Formation>();
  displayedColumns = ['nom' , 'description' , 'duree' , 'formateur' , 'theme' , 'buttons'];

  constructor( public dialog: MatDialog ,
               private spinnerService: SpinnerService ,
               private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations() ;
  }

  openAjouterFormationModal() {
    const dialogRef = this.dialog.open(AjouterFormationComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getFormations()
      }
    )
  }

  getFormations(){
    this.spinnerService.deactivate() ;
    this.formationService.getAll().subscribe(
      res => {
        this.formations = res ;
        this.dataSource = new MatTableDataSource<Formation>(this.formations);
        this.spinnerService.deactivate()
      },
      error => {
        this.spinnerService.deactivate()
      }
    )
  }

  openDeleteDialog(id: any) {
    const dialogRef = this.dialog.open( DeleteFormationComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '300px' , data: { id : id }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getFormations()
      }
    )
  }

  openQuestionsDialog(id: any) {
    const dialogRef = this.dialog.open( QuestionsComponent , {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '600px' , data: { id : id }
    });
  }

  openStatDialog(id: any) {
    const dialogRef = this.dialog.open( EvaluationComponent , {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '600px' , data: { id : id }
    });
  }

}
