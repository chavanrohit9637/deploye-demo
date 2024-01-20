import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  addCourseFrom: FormGroup;
  constructor(private formG:FormBuilder,
    private dialogConnectRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    ){
     this.addCourseFrom=this.formG.group({
       title:['',Validators.required],
       subtitle:['',Validators.required],
       logo:['',Validators.required],
       rating:['',Validators.required]
     })
  }
  OnSubmit(){
    console.log("after submit",this.addCourseFrom.value)
    this.dialogConnectRef.close(this.addCourseFrom.value)
  }
  close(){
    this.dialogConnectRef.close()
  }
   
}
