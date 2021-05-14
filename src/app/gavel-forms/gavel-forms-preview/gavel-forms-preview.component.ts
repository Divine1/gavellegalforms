import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gavel-forms-preview',
  templateUrl: './gavel-forms-preview.component.html',
  styleUrls: ['./gavel-forms-preview.component.scss']
})
export class GavelFormsPreviewComponent implements OnInit {

  @Input() form : {
    first : string,
    last : string
  };
  constructor() {
    this.form = {
      first : "",
      last : ""
    };
  }

  ngOnInit(): void {
    console.log("GavelFormsPreviewComponent form ",this.form);
  }

}
