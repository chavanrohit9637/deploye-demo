import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {

  addCourseFrom: FormGroup;
  constructor(private formG:FormBuilder,
    private dialogConnectRef: MatDialogRef<UpdateCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    ){
     this.addCourseFrom=this.formG.group({
       title:[data.title,Validators.required],
       subtitle:[data.subtitle,Validators.required],
       logo:[data.logo,Validators.required],
       rating:[data.rating,Validators.required]
     })
  }
  OnSubmit(){
    console.log("after submit",this.addCourseFrom.value)
    this.dialogConnectRef.close(this.addCourseFrom.value)
  }
  close(){
    console.log(this.data)
    this.dialogConnectRef.close()
  }

}
