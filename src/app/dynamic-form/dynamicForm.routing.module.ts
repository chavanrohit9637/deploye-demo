import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
   path:"custom-form",
   component:CustomFormsComponent
  },
  {
    path:"demo",
    component:DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule { }
