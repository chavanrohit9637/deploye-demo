import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { DynamicFormRoutingModule } from './dynamicForm.routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    CustomFormsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    IonicModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule

  ]
})
export class DynamicFormModule { }
