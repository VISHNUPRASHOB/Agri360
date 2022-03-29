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


@Component({
  selector: 'app-agroinvest',
  templateUrl: './agroinvest.component.html',
  styleUrls: ['./agroinvest.component.css'],
  
})
export class AgroinvestComponent implements OnInit {
allval! : any;
  prod!: AgroInvest[];
  fert!: Fertilizer[];
  Agrodata!: FormGroup;
  AgroInsert!: FormGroup;
value3!:string;
  displayModal!: boolean;
  displayModalEdit!: boolean;
  crp!: Croptype[];
  Mdata!: Mastermodel[];
  Pdata!: Pesticide[];
  AgroForm :any;
  d1: any;
  constructor(private http : HttpClient,private webapi : WebapiService,private formbuild :  FormBuilder) {

    this.Agrodata =  this.formbuild.group({id:[''],
      seasonName:[''],investAmount:[''],productSpend:[''],profitAmount:[''],lossAmount:[''],fertilizerId:[''],pesticideId:[''],userId:[''],cropId:['']
    });
    this.AgroInsert =  this.formbuild.group({
    seasonName:[''],investAmount:[''],productSpend:[''],profitAmount:[''],lossAmount:[''],fertilizerId:[''],pesticideId:[''],userId:[''],cropId:['']
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
    this.webapi.getagro().subscribe({
      next: (data)=>{
        console.log(data)
        // var fertilid = Number(data['fertilizerId' as keyof Object]);
        // this.webapi.getfertil(fertilid).subscribe(data2=>{
        // })
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
  // console.log(this.Agrodata.value)
  this.webapi.getfertil().subscribe({
    next: (data) => {
      this.fert = data;
    },
    error: (err) =>{
      console.log(err)
    }
  })
  this.webapi.getcrop().subscribe({
    next: (data)=>{
      this.crp = data;
    },
    error: (err)=>{}
  })
  this.webapi.getMain().subscribe({
    next: (data)=>{
      this.Mdata = data;
    },
    error: (err)=>{}
  })
  this.webapi.getpest().subscribe({
    next: (data)=>{
      this.Pdata = data;
    },
    error: (err)=>{}
  })
  // this.AgroInsert.setValue({
  //   'seasonName': '',
  //   'investAmount': '',
  //   'productSpend': '',
  //   'profitAmount': '',
  //   'lossAmount': '',
  //   'fertilizerId':this.Agrodata.value.fertilizerId,
  //   'pesticideId': this.Agrodata.value.pesticideId,
  //   'userId': this.Agrodata.value.userId,
  //   'cropId': this.Agrodata.value.cropId
  // })
}
// pushing the agroinvest information from create button
pushdbagro(){
console.log(this.AgroInsert.value)
let _Agrodata2 = this.AgroInsert.value;
_Agrodata2.fertilizerId = _Agrodata2.fertilizerId.id;
_Agrodata2.cropId = _Agrodata2.cropId.id;
_Agrodata2.pesticideId = _Agrodata2.pesticideId.id;
_Agrodata2.userId = _Agrodata2.userId.id;
this.http.post("https://localhost:7262/api/AgroInvest/",_Agrodata2).subscribe({
  next: (data)=>{
    console.log(data)
    this.loadme();
  },
  error: (err)=>{
    console.log(err)
  }
})
// console.log(this.Agrodata.value)
this.displayModal = false;


}
// edit model invock
updateme(dataItem : AgroInvest){
  console.log(dataItem.id)
  this.Agrodata.setValue({
    'id':dataItem.id,
    'seasonName': dataItem.seasonName,
    'investAmount': dataItem.investAmount,
    'productSpend': dataItem.productSpend,
    'profitAmount': dataItem.profitAmount,
    'lossAmount': dataItem.lossAmount,
    'fertilizerId':dataItem.fertilizerId,
    'pesticideId': dataItem.pesticideId,
    'userId': dataItem.userId,
    'cropId': dataItem.cropId
  })
  this.webapi.getfertil().subscribe({
    next: (data) => {
      this.fert = data;
    },
    error: (err) =>{
      console.log(err)
    }
  })
  this.webapi.getcrop().subscribe({
    next: (data)=>{
      this.crp = data;
    },
    error: (err)=>{}
  })
  this.webapi.getMain().subscribe({
    next: (data)=>{
      this.Mdata = data;
    },
    error: (err)=>{}
  })
  this.webapi.getpest().subscribe({
    next: (data)=>{
      this.Pdata = data;
    },
    error: (err)=>{}
  })
  this.displayModalEdit = true;
}
updatemesubmit(){  

let _Agrodata = this.Agrodata.value;
_Agrodata.fertilizerId = _Agrodata.fertilizerId.id;
_Agrodata.pesticideId = _Agrodata.pesticideId.id;
_Agrodata.userId = _Agrodata.userId.id;
_Agrodata.cropId = _Agrodata.cropId.id;
// console.log(this.Agrodata.value)
console.log(_Agrodata.id)

this.webapi.putagroinvest(_Agrodata,_Agrodata.id).subscribe({
  next: (data)=>{
    console.warn(data)
    this.loadme();
  },
  error:(err)=>{}
})

  this.displayModalEdit = false;
  this.Agrodata.reset();
 

}

//delete items invock model
deleteme(data:any){
console.log(data.id)
this.webapi.delagroinvest(data.id).subscribe({
  next: (data)=>{
    console.warn(data)
    this.loadme();
  },
  error: (err)=>{}
});

}
// action to delete item 
deletemesubmit(){

}
refresh(){
  this.loadme();
}
}
