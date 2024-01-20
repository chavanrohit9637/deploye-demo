import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { courseList } from '../model/course';
import {ID, Query} from 'appwrite'
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';
import { PageEvent } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit{

  data: courseList[]=[];
  totalCourses: NumberInput;
  pageLimit:NumberInput;
  offSet:Number;
  constructor( 
    private api:ApiService,
    private dialog:MatDialog
    ){ }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      // Your authentication logic goes here
       return false
    }
  
  ngOnInit(){ 
    this.loadData() 
  }
  loadData(){
    this.data=[]
    let promise=  this.api.createDB().listDocuments(
      "655b46d32d097083bc7a","655b46fb2da45b6d463d",
      [
        Query.limit(4),
        Query.offset(0)
      ]
    )
    promise.then(
      (res)=>{
        this.totalCourses=res.total
        res.documents.forEach((res)=>{
          const newData:courseList={
             logo:res.logo,
             title:res.title,
             subtitle:res.subtitle,
             rating:res.ratings,
             id:res.$id
          };
          this.data.push(newData)
        })
        console.log("\n********\nResponse", res)  
      },
      (err)=>{
        console.log("\n********\nError", err)
      } )  
  }
  openDeleteCourse(id:string){
    let dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '600px',
    });
  dialogRef.afterClosed().subscribe((userAction)=>{
     if(userAction==true){
      this.deleteCourse(id)
     }
  })
  }
  deleteCourse(id:string){
    const pro=this.api.createDB().deleteDocument("655b46d32d097083bc7a","655b46fb2da45b6d463d",id)
    // this.data=this.data.filter((d)=>d.id!=id)
    pro.then((res)=>{
      this.loadData();
    },(err)=>{
        console.log("error while deleting the course id",id,err,)
    })
   
  }
  openAddCourseDialog(){
    let dialogRef = this.dialog.open(AddCourseComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data)=>{
      console.log("model data",data)
      this.createDocument(data)
    })
     
  }
  createDocument(data: any){
   const pro= this.api.createDB().createDocument(
      "655b46d32d097083bc7a",
      "655b46fb2da45b6d463d",
      ID.unique(),{
        "title":data.title,
        "subtitle":data.subtitle,
        "logo":data.logo,
        "ratings":data.rating
      }
    )
    pro.then(
      (res)=>{
        this.loadData()
      },
      (err)=>{
        console.log("got an error while creating document",err)
      }
    )
  }
  updateDocumnet(data:any,id:string){
    const pro=this.api.createDB().updateDocument(
      "655b46d32d097083bc7a",
      "655b46fb2da45b6d463d",
      id,
      {
        "title":data.title,
        "subtitle":data.subtitle,
        "logo":data.logo,
        "ratings":data.rating
      }
    )
    pro.then((res)=>{
      this.loadData()
    },
    (err)=>{
      console.log("error while updating document",err)
    }
    )

  }
  openUpdateCourse(course:courseList){
    let dialogRef = this.dialog.open(UpdateCourseComponent, {
      width: '600px',
      data:{
        title:course.title,
        subtitle:course.subtitle,
        logo:course.logo,
        rating:course.rating
      }
    });
    dialogRef.afterClosed().subscribe((data)=>{
      console.log("model data",data)
      this.updateDocumnet(data,course.id)
    })

  }
  changePage(e: PageEvent){
     console.log("change event called",e)
     this.pageLimit=e.pageSize
     this.loadPaginatedData(e.pageSize, e.pageSize*e.pageIndex)
  }
  loadPaginatedData(pageLimit:number,pageOffset:number){

    this.data=[]
    let promise=  this.api.createDB().listDocuments(
      "655b46d32d097083bc7a","655b46fb2da45b6d463d",
      [
        Query.limit(pageLimit),
        Query.offset(pageOffset)
      ]
    )
    promise.then(
      (res)=>{
        this.totalCourses=res.total
        res.documents.forEach((res)=>{
          const newData:courseList={
             logo:res.logo,
             title:res.title,
             subtitle:res.subtitle,
             rating:res.ratings,
             id:res.$id
          };
          this.data.push(newData)
        })
        console.log("\n********\nResponse", res)  
      },
      (err)=>{
        console.log("\n********\nError", err)
      } ) 

  }



}
