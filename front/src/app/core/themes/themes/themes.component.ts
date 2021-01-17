import { Component, OnInit } from '@angular/core';
import { AjouterThemeComponent } from '../ajouter-theme/ajouter-theme.component';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { Theme } from '../../../shared/classes/Theme';
import { ThemeService } from '../../../shared/services/http/theme.service';
import { DeleteThemeComponent } from '../delete-theme/delete-theme.component';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  themes : Theme[] = [] ;
  public dataSource = new MatTableDataSource<Theme>();
  displayedColumns = ['nom', 'description' ];

  constructor( private spinnerService: SpinnerService ,
               public dialog: MatDialog ,
               private themeService : ThemeService
  ) {}

  ngOnInit(): void {
   this.getThemes() ;
  }

  openAjouterThemeModal() {
    const dialogRef = this.dialog.open(AjouterThemeComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getThemes() ;
      }
    )
  }

  // openDeleteDialog(id: any) {
  //   const dialogRef = this.dialog.open(DeleteThemeComponent, {
  //     panelClass: 'custom-dialog-container' ,width: '800px', height: '300px' , data: { id : id }
  //   });
  //   dialogRef.afterClosed().subscribe(
  //     res => {
  //       this.getThemes() ;
  //     }
  //   )
  // }


  getThemes(){
    this.spinnerService.deactivate() ;
    this.themeService.getAll().subscribe(
      res => {
        this.themes = res ;
        this.dataSource = new MatTableDataSource<Theme>(this.themes);
        this.spinnerService.deactivate()
      },
      error => {
        this.spinnerService.deactivate()
      }
    )
  }
}
