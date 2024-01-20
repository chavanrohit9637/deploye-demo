import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';

const routes: Routes = [
  {
   path:"details",
  component:CourseDetailsComponent
   
  },
  {
    path:"",
    component:ListCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
