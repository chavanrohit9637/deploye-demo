import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent {
  constructor ( private dialogConnectRef: MatDialogRef<DeleteCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){

  }

  close(){
    this.dialogConnectRef.close()
  }
  OnSubmit(){
    this.dialogConnectRef.close(true)
  }

}
