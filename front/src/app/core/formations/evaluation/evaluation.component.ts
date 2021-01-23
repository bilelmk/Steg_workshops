import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormationService } from '../../../shared/services/http/formation.service';
import { SpinnerService } from '../../../shared/services/in-app/spinner.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  stat ;
  parsed_stats ;

  constructor(public dialog: MatDialog ,
              @Inject(MAT_DIALOG_DATA) private data : any ,
              public matDialogRef: MatDialogRef<EvaluationComponent> ,
              private formationService: FormationService ,
              private spinnerService : SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.activate() ;
    this.formationService.getStat(this.data.id).subscribe(
      res => {
        this.stat = res ;
        this.parseStat()
        console.log(res)
        this.spinnerService.deactivate()
      },
      err => {
        this.spinnerService.deactivate()
        console.log(err)
      }
    )
  }

  parseStat(){
    this.parsed_stats = [] ;
    for(let question of this.stat){
      let parsed_stat : any = {}
      parsed_stat.barChartLegend = true ;
      parsed_stat.barChartLabels =  [];
      parsed_stat.barChartData = [{data: [], label: question.question_content}];
      parsed_stat.barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      for(let choix_res of question.list_choix_response) {
        parsed_stat.barChartLabels.push(choix_res.choix_content)
        parsed_stat.barChartData[0].data.push(choix_res.number)
      }
      console.log(parsed_stat)
      this.parsed_stats.push(parsed_stat)
    }

  }



}
