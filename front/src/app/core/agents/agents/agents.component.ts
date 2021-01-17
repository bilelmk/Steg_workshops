import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../shared/services/http/agent.service';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';
import { MatTableDataSource } from '@angular/material';
import { Agent } from '../../../shared/classes/Agent';
import { AjouterAgentComponent } from '../ajouter-agent/ajouter-agent.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAgentComponent } from '../delete-agent/delete-agent.component';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  agents : Agent[] = [] ;
  public dataSource = new MatTableDataSource<Agent>();
  displayedColumns = ['nom', 'prenom' , 'email' , 'cin' , 'telephone' ,'adresse','buttons'];

  constructor(private agentService : AgentService ,
              private spinnerService: SpinnerService ,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAgents() ;
  }

  openAjouterAgentModal() {
    const dialogRef = this.dialog.open(AjouterAgentComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '700px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getAgents() ;
      }
    )
  }

  openDeleteDialog(id: any) {
    const dialogRef = this.dialog.open(DeleteAgentComponent, {
      panelClass: 'custom-dialog-container' ,width: '800px', height: '300px' , data: { id : id }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getAgents() ;
      }
    )
  }

  getAgents(){
    this.spinnerService.deactivate() ;
    this.agentService.getAll().subscribe(
      res => {
        this.agents = res ;
        this.dataSource = new MatTableDataSource<Agent>(this.agents);
        this.spinnerService.deactivate()
      },
      error => {
        this.spinnerService.deactivate()
      }
    )
  }

}
