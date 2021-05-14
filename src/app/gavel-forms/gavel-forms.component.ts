import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Ilicensor_licensee,details_licensor_licensee} from './gavelforms.constans';

@Component({
  selector: 'app-gavel-forms',
  templateUrl: './gavel-forms.component.html',
  styleUrls: ['./gavel-forms.component.scss']
})
export class GavelFormsComponent implements OnInit {
  
  form : {
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
    
  }
  //submit(form:FormGroup) {
  submit(form:any) {
    console.log('GavelFormsComponent form submit', form);
    
    this.form = form;
    //this.form = form.name;
  }
}
