import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon,cloudIcon,cogIcon } from '@cds/core/icon';
import { GavelFormsComponent } from './gavel-forms/gavel-forms.component';
import { GavelFormsStepperComponent } from './gavel-forms/gavel-forms-stepper/gavel-forms-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GavelFormsPreviewComponent } from './gavel-forms/gavel-forms-preview/gavel-forms-preview.component';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(cloudIcon);
ClarityIcons.addIcons(cogIcon);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GavelFormsComponent,
    GavelFormsStepperComponent,
    GavelFormsPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
