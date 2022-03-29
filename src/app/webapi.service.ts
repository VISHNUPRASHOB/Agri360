import { Injectable } from '@angular/core';
import {Master} from './Master';
import { HttpClient } from '@angular/common/http';  
import { AgroInvest } from './AgroInvest';
import { Fertilizer } from './Fertilizer';
import { Croptype } from './Croptype';
import { Mastermodel } from './Mastermodel';
import { Pesticide } from './Pesticide';
import { Loandetail } from './Loandetail';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  constructor(private http: HttpClient) { }
  postR(data : any){
    return this.http.post("https://localhost:7262/Users/authenticate",data);
   }
  getMaster() {
    return this.http.get("https://localhost:7262/api/master");
  }
  getagro(){
    return this.http.get<AgroInvest[]>("https://localhost:7262/api/AgroInvest", {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  getfertil(){
    return this.http.get<Fertilizer[]>("https://localhost:7262/api/Fertilizer");
  }
  getcrop(){
    return this.http.get<Croptype[]>("https://localhost:7262/api/CropType");
  }
  getMain(){
    return this.http.get<Mastermodel[]>("https://localhost:7262/api/Master", {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  getpest(){
    return this.http.get<Pesticide[]>("https://localhost:7262/api/Pesticide");
  }
  putagroinvest(data: any,id:number){
    return this.http.put("https://localhost:7262/api/AgroInvest/"+id,data, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  delagroinvest(id:number){
    return this.http.delete("https://localhost:7262/api/AgroInvest/"+id, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  getloan(){
    return this.http.get<Loandetail[]>('https://localhost:7262/api/LoanDetail',{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  putloan(data: any,id:number){
    return this.http.put("https://localhost:7262/api/LoanDetail/"+id,data, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
  delloan(id:number){
    return this.http.delete("https://localhost:7262/api/LoanDetail/"+id, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
  }
}
