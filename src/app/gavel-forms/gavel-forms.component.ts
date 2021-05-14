import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gavel-forms',
  templateUrl: './gavel-forms.component.html',
  styleUrls: ['./gavel-forms.component.scss']
})
export class GavelFormsComponent implements OnInit {
  
  form : {
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
    
  }
  //submit(form:FormGroup) {
  submit(form:any) {
    console.log('GavelFormsComponent form submit', form.value);
    //this.form = form.value.name;
    this.form = form.name;
  }
}
