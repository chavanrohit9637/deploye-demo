
import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}
interface JsonFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-custom-forms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './custom-forms.component.html',
  styleUrls: ['./custom-forms.component.css']
})
export class CustomFormsComponent implements OnChanges,OnInit {

   public jsonFormData: JsonFormData;
  public myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private http: HttpClient) {}
    
    ngOnInit() {
      console.log("oninit")
      this.http
        .get('assets/form.json')
        .subscribe((d : any) => {
          console.log("sdd",d)
          this.jsonFormData= d
          console.log("da",this.jsonFormData.controls[0].name)
          this.createForm(this.jsonFormData.controls);
        });
    }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.jsonFormData.firstChange && this.jsonFormData?.controls!=undefined) {
      this.createForm(this.jsonFormData.controls);
    }
  }
  createForm(controls: JsonFormControls[]) {
    console.log("createForm")
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
}
