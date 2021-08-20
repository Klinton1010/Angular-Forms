import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators,FormArray } from '@angular/forms';
import { ReactiveServiceService } from '../reactive-service.service';
import { PasswordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/user-name.validator';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb:FormBuilder, private _reg:ReactiveServiceService) { }
  registrationForms?:any
  /*registrationForms=new FormGroup(
    {
      username:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
      address:new FormGroup({
        city:new FormControl(''),
        state:new FormControl(''),
        postal:new FormControl('')
      })
    }
  )*/

  //ALTERNATE OF WRITING REPITATIVE FORM CONTROL IS FORM BUILDER
 /* registrationForms:any=this.fb.group({
    //username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
    username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/pop/)]],
    email:[''],
    subscribe:[false],
    password:[''],
    confirmPassword:[''],

    address:this.fb.group({
      city:[''],
      state:[''],
      postal:['']
    })

  },{validators:PasswordValidator});*/
  
  loadApi()
  {
    //TO POPULATE ALL DATA
   /* this.registrationForms.setValue({
      username:"Hari",
      password:"test",
      confirmPassword:"test",
      address:{
        city:"Troyes",
        state:"France",
        postal:"60662606"

      }


    })*/

    //TO POPULATE PARTICULAR DATA ON FORM FIELDS

   /* this.registrationForms.patchValue({
      username:"Hari",
      password:"test",
      confirmPassword:"test"
    })*/

  }
  get AlternateEmails()
  {
    return this.registrationForms.get('alternateEmails') as FormArray
  }

  addAlternateEmail()
  {
    this.AlternateEmails.push(this.fb.control(''));
    console.log("Alternatte",this.AlternateEmails)
  }
  submitMyForm()
  {
    console.log(this.registrationForms.value)
    this._reg.gettingRegistered(this.registrationForms.value).subscribe(data=>console.log("Success",data),
    error=>console.log("Error",error));
  }
  ngOnInit(): void {
    this.registrationForms=this.fb.group({
      //username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/pop/)]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
  
      address:this.fb.group({
        city:[''],
        state:[''],
        postal:['']
      }),
      //Adding Dynamic Form
      alternateEmails:this.fb.array([])
  
    },
    //Cross Validation
    {validators:PasswordValidator});
    
    //conditional
    this.registrationForms.get('subscribe')?.valueChanges
    .subscribe((checks: any)=>{
      console.log(checks)
      const email=this.registrationForms?.get('email');
      if(checks)
      {
       email?.setValidators(Validators.required);

      }
      else
      {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })
  }

}
