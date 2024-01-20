import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  constructor(private api:ApiService,
    private route:Router,
    ){
    
  }
  logout(){
    const session=localStorage.getItem('session') || ""
    console.log("se",session)
    if(session!==null || session!==""){
      const pr= this.api.account().deleteSession("current")
      pr.then((res)=>{
        console.log("Delete Session SuccessFully ..")
        this.route.navigate(["/auth/login"])
      },(err)=>{
        console.log("err",err)
      })
    }
     
  }
}
