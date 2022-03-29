import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WebapiService} from '../webapi.service';
import { NotificationService } from "@progress/kendo-angular-notification";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login!: FormGroup;
  constructor(private webapi : WebapiService, private notificationService: NotificationService,private formbuild :  FormBuilder, private router : Router) {
    this.Login =  this.formbuild.group({
      email:[''],password:['']   })
   }
  // @Input()
  // email: boolean | string = false;
  ermsg : boolean = false;
  erms : boolean = false;
  model : string ="";
  value3! :string;
  val : string ="Register";
  ngOnInit(): void {
    // this.webapi.getMaster().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }
onSubmit(){
  console.log(this.Login.value)
  if (this.Login.value.email != ""  && this.Login.value.password != ""){
    
    this.webapi.postR(this.Login.value).subscribe({
      next: (data) => {
        console.log(data)
        this.ermsg = true;
        this.erms = false;
        var token = data['token' as keyof Object].toString();
        
        this.model = `login successful ${token.substring(0, 6)}....${token.substring(token.length -4 , token.length)}`;  
        localStorage.setItem('LogIn','true');
        localStorage.setItem('token', token);
        localStorage.setItem('viewas',  data['activity' as keyof Object].toString() );
        this.router.navigate(['/agroinvest-component'],{
          replaceUrl: true
        });
        window.location.reload();
      },
      error: (err) => {
        if(err.status == 400){
          this.ermsg = true;
          this.erms = true;
          this.model = "Invalid User";  
          console.log(err.status)
        }
        console.log(err)
      }
    });
  }else{
    console.warn("Enter some valid Informations in ", this.Login.value);
    if(this.Login.value.email == ""){
      this.ermsg = true;
      this.erms = true;
      this.model = "Enter a valid Mail ID";  
      
      if(this.Login.value.password == "" && this.Login.value.email != ""){
        this.ermsg = true;
        this.erms = true;
        this.model = "Enter a valid Password";    
      }
      
    }
    if(this.Login.value.email != ""){
      this.ermsg = true;
      this.erms = true;
      this.model = "Enter a valid Mail ID";  
      
      if(this.Login.value.password == "" && this.Login.value.email != ""){
        this.ermsg = true;
        this.erms = true;
        this.model = "Enter a valid Password";    
      }
      
    }
    
  }
 
  
  
}
public show(): void {
  
  this.ermsg = !this.ermsg;
}


}
