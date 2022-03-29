import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
 import { AgroInvest } from '../AgroInvest';
 import {WebapiService} from '../webapi.service';
import { Fertilizer } from '../Fertilizer';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Croptype } from '../Croptype';
import { Mastermodel } from '../Mastermodel';
import { Pesticide } from '../Pesticide';
import { Loandetail } from '../Loandetail';


@Component({
  selector: 'app-loandetail',
  templateUrl: './loandetail.component.html',
  styleUrls: ['./loandetail.component.css']
})
export class LoandetailComponent implements OnInit {
  Loandata!: FormGroup;
  LoanInsert!: FormGroup;
  prod!: Loandetail[];
  displayModal!: boolean;
  Mdata!: Mastermodel[];
  displayModalEdit!: boolean;
  constructor(private http : HttpClient,private webapi : WebapiService,private formbuild :  FormBuilder) {

    this.Loandata =  this.formbuild.group({
      id:[''],
      userId:[''],
      loanAmount:[''],
      repayInterval:[''],
      dueDate:[Date],
      loanStatus:[''],
      intrestAmount:['']
    });
    this.LoanInsert =  this.formbuild.group({
      userId:[''],
      loanAmount:[''],
      repayInterval:[''],
      dueDate:[''],
      loanStatus:[''],
      intrestAmount:['']
    });
   }
   dockItems!: MenuItem[];
  ngOnInit(): void {
    this.dockItems = [
      {
          label: 'Finder',
          icon: "https://cdn-icons-png.flaticon.com/512/1022/1022493.png",
          command: () => this.createme()
      },
      {
          label: 'App Store',
          icon: "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1211/faysalfarhan121100015/16278993-%E6%9B%B4%E6%96%B0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E5%85%89%E6%B2%A2%E3%81%AE%E3%81%82%E3%82%8B%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8%E8%89%B2%E3%81%AE%E3%83%9C%E3%82%BF%E3%83%B3.jpg",
          command: () => this.loadme()
      },
      {
          label: 'Photos',
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mNRPJMJsZIZpK12X2Cm67mGxqmWMUWD_gA&usqp=CAU"
      },
  ];
    this.loadme();
  }
  loadme(){
    this.webapi.getloan().subscribe({
      next: (data)=>{
        console.log(data)
        this.prod = JSON.parse(JSON.stringify(data));
        console.log("working of get heder")
      },
      error: (err) =>{
        console.log(err)
      }
      });
  }
  createme(){
    this.displayModal = true;
    this.webapi.getMain().subscribe({
      next: (data)=>{
        this.Mdata = data;
      },
      error: (err)=>{}
    })
  }
  pushdbagro(){
    // console.log(this.LoanInsert.value)
let _Loandata2 = this.LoanInsert.value;
_Loandata2.userId = _Loandata2.userId.id;
console.log(_Loandata2)
this.http.post("https://localhost:7262/api/LoanDetail",_Loandata2).subscribe({
  next: (data)=>{
    console.log(data)
    this.loadme();
  },
  error: (err)=>{
    console.log(err)
  }
})
this.displayModal = false;

  }

  updateme(dataItem:any){
    console.log(dataItem.id)
    this.Loandata.setValue({
      'id':dataItem.id,
      'userId': dataItem.userId,
      'loanAmount':dataItem.loanAmount,
      'repayInterval':dataItem.repayInterval,
      'dueDate':dataItem.dueDate,
      'loanStatus':dataItem.loanStatus,
      'intrestAmount':dataItem.intrestAmount
    })
    this.webapi.getMain().subscribe({
      next: (data)=>{
        this.Mdata = data;
      },
      error: (err)=>{}
    })
    this.displayModalEdit = true;
  }
  updatemesubmit(){

    let _Agrodata = this.Loandata.value;
    _Agrodata.userId = _Agrodata.userId.id;
    // console.log(this.Agrodata.value)
    console.log(_Agrodata.id)
    
    this.webapi.putloan(_Agrodata,_Agrodata.id).subscribe({
      next: (data)=>{
        console.warn(data)
        this.loadme();
      },
      error:(err)=>{}
    })
    
      this.displayModalEdit = false;
      this.Loandata.reset();
  }

  deleteme(data:any){
    console.log(data.id)
    this.webapi.delloan(data.id).subscribe({
      next: (data)=>{
        console.warn(data)
        this.loadme();
      },
      error: (err)=>{}
    });
    
  }
}
