import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesRoutingModule } from './courses.routing.module';
import {MatCardModule} from '@angular/material/card';
import { RatingComponent } from './rating/rating.component';
import {MatButtonModule} from '@angular/material/button';
import { AddCourseComponent } from './add-course/add-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListCoursesComponent,
    CourseDetailsComponent,
    RatingComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class CoursesModule { }
