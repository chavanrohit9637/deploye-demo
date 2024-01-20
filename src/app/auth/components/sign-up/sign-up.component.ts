import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ID } from "appwrite"
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from '../../service/custom-validation.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm: FormGroup; 
  submitted=false
   
    constructor(
    private api:ApiService,
    private route:Router,
    private customValidator: CustomvalidationService,
    private formG:FormBuilder
    ){

      this.registerForm = this.formG.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
      },
        {
          validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
        }
      );
    }
    
    get registerFormControl() {
      return this.registerForm.controls;
    }
   

    onSubmit(){
      this.submitted = true;
      console.log("sign up")
      const formData=this.registerForm.value
      console.log("data",formData)
      var email=formData.email || ""
      var password=formData.password || ""
      var name=formData.name || ""
      if(this.registerForm.valid){
      this.api.account().create(ID.unique(),email,password,name).then((res)=>{
         console.log("res",res)
         this.route.navigate(["/auth/login"])
      })
      }
    }
     
}
