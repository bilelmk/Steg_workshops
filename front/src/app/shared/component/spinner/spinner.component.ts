import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../../services/in-app/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() show: boolean;

  constructor(private spinner: NgxSpinnerService, private spinnerService: SpinnerService) {}
  ngOnInit() {
    // this.LOADING_TEXT = SPINNER_MESSAGE;
    this.spinnerService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
