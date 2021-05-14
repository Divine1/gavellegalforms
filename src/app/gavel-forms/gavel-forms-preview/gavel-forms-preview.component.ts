import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Ilicensor_licensee,details_licensor_licensee} from './../gavelforms.constans';

@Component({
  selector: 'app-gavel-forms-preview',
  templateUrl: './gavel-forms-preview.component.html',
  styleUrls: ['./gavel-forms-preview.component.scss']
})
export class GavelFormsPreviewComponent implements OnInit {

  @Input() form : {
    licensor:Ilicensor_licensee,
    licensee:Ilicensor_licensee
  };
  constructor() {
    this.form = {
      licensor : {
        ...details_licensor_licensee
      },
      licensee : {
        ...details_licensor_licensee
      }
    };
  }

  ngOnInit(): void {
    console.log("GavelFormsPreviewComponent form ",this.form);
  }

}
