import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CustomvalidationService } from '../../service/custom-validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading=false;

  loginForm: FormGroup; 
  submitted=false
  constructor( private api:ApiService,
    private route:Router,
    private customValidator: CustomvalidationService,
    private formG:FormBuilder){
      this.loginForm = this.formG.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
       
      })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log("login login");
    const formData=this.loginForm.value
    console.log("data",formData)
    var email=formData.email || ""
    var password=formData.password || ""
    if(this.loginForm.valid){
      this.isLoading=true
     this.api.account().
     createEmailSession(email,password).then((res)=>{
        console.log("res",res)
        // localStorage.setItem("session",res.userId)
        this.isLoading=false
        this.route.navigate(["/course"])
        
     }).catch((err)=>{
      console.log("error 123",err)
      this.isLoading=false
     })
    
   }
  }
}
