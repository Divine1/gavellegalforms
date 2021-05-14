import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

const details_licensor_licensee = {
  fullname: ['', Validators.required],
  age : ['', Validators.required],
  gender : ['', Validators.required],
  uid : ['', Validators.required],
  pan : ['', Validators.required],
  address : ['', Validators.required],
  city : ['', Validators.required],
  pincode : ['', Validators.required],
  phone : ['', Validators.required],
  email : ['', Validators.required]
};

@Component({
  selector: 'app-gavel-forms-stepper',
  templateUrl: './gavel-forms-stepper.component.html',
  styleUrls: ['./gavel-forms-stepper.component.scss']
})
export class GavelFormsStepperComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    /*
    this.form = this.formBuilder.group({
      licensor : this.formBuilder.group({
        fullname: this.formBuilder.group({
          first: ['Luke', Validators.required],
          last: ['Skywalker', Validators.required],
        }),
        contact: this.formBuilder.group({
          email: [],
          phone: [],
        }),
        password: this.formBuilder.group({
          password: [],
          confirm: [],
        }),
      })
      
    });
    */
   
    this.form = this.formBuilder.group({
      licensor : this.formBuilder.group({
        ...details_licensor_licensee
      }),
      licensee : this.formBuilder.group({
        ...details_licensor_licensee
      }),
      agreement : this.formBuilder.group({
        totalduration : ['', Validators.required]
      }),
    });

  }
  
  ngOnInit(): void {

    this.form.valueChanges.subscribe((dataobj)=>{
      console.log("dataobj ",dataobj);
      this.onSubmit.emit(dataobj)
    })
  }
  submit() {
    console.log('GavelFormsStepperComponent form submit', this.form.value);
    //this.onSubmit.emit(this.form)
  }
}
