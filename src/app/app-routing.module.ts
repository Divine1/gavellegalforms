import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GavelFormsComponent } from './gavel-forms/gavel-forms.component';

const routes: Routes = [
  {
    path : "",component : GavelFormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
