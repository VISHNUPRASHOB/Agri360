import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value3: string ="";
  Register!: FormGroup;
  date2!: Date;
  constructor(private formbuild :  FormBuilder) { 
   this.Register =  this.formbuild.group({
      fname:[''],email:[''],password:[''],dob:['']
    })
  }

  ngOnInit(): void {
  }

  show(){
    // console.log((this.Register.controls['dob'].value as Date))
    console.log(this.Register.value)
  }
}
