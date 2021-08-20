
import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor(private enroll:EnrollmentService) { }

  topic=['Angular','Vue','React'];
  subjectHasError=true;
  submitted=false;
  errorMsg='';
  usermodel=new User('','hari@gmail.com',5895696655,'default','morning',true);
  validateTopic(value:any)
  {
   if(value ==='default')
   {
    this.subjectHasError=true;
   }
   else
   {
     this.subjectHasError=false;
     
   }
  }

  onSubmit()
  {
    this.submitted=true;
    console.log(this.usermodel)
    this.enroll.enroll(this.usermodel).subscribe
    (data=>console.log("success",data),
    error=>this.errorMsg=error.statusText)
  }

  
  ngOnInit(): void {
  
  }

}
