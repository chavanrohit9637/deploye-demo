import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthServer } from './auth-server';

const routes: Routes = [
  {
    path:"auth",
    loadChildren:()=>import('./auth/auth.module').then(node=>node.AuthModule)

  },
  {
    path:"course",
    loadChildren:()=>import('./courses/courses.module').then(node=>node.CoursesModule),
    canActivate:[AuthServer]

  },
  {
    path:"forms",
    loadChildren:()=>import('./dynamic-form/dynamic-form.module').then(node=>node.DynamicFormModule)

  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"",
    loadChildren:()=>import('./auth/auth.module').then(node=>node.AuthModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
