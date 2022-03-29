import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Croptype } from '../Croptype';
import { Fertilizer } from '../Fertilizer';
import { Pesticide } from '../Pesticide';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  horizontalOptions: any;
  lineStylesData: any;
  basicD:any;
  data: any;

  chartOptions: any;

  subscription!: Subscription;

  dockItems!: MenuItem[];
  customers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  crp!: Croptype[];
    fert!: Fertilizer[];
    Pdata!: Pesticide[];
    prod!:any[];
    a!:number;
    b!:number;
    c!:number;
    arr!:any[];
    value! : any;
    value2! : any;
    value3!:any;
    val2! : number;
    temp!:number;
  constructor(private webapi: WebapiService,private http: HttpClient) { }
refresh(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?appid=b9b33dfee99f1eed356df9fe3acebbcd&q=palakkad').subscribe({
        next: (data)=>{
          this.value = JSON.parse(JSON.stringify(data));
          this.value2 = this.value['weather'];
          this.value3 = this.value['main'];
           this.temp = this.value3['temp'];
        },
        error: (err=>{})
      })
}
  ngOnInit(): void {
    this.refresh();
    this.webapi.getcrop().subscribe({
      next: (data)=>{
        this.crp = data;
        this.a = this.crp.length * 100;
        this.arr[0] = (this.a);
        console.log(this.a);
      },
      error: (err)=>{}
    })
 this.webapi.getfertil().subscribe({
    next: (data) => {
      this.fert = data;
      this.b = this.fert.length * 100;
      this.arr[1] = (this.b);
    },
    error: (err) =>{
      console.log(err)
    }
  })
  this.webapi.getpest().subscribe({
    next: (data)=>{
      this.Pdata = data;
      this.c = this.Pdata.length * 100;
      this.arr[2] =(this.c);
    },
    error: (err)=>{}
  })
  this.webapi.getagro().subscribe({
    next: (data)=>{
      this.prod =data;
    },
    error: (err) =>{
    }
    })
    this.arr = [100,200,500];
   
  
   
    console.log(this.arr)
    this.basicD = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
  };

    this.dockItems = [
      {
          label: 'Finder',
          icon: "data:image/jpeg;base64,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"
      },
      {
          label: 'App Store',
          icon: "../../assets/webview.gif"
      },
      {
          label: 'Photos',
          icon: "assets/showcase/images/dock/photos.svg"
      },
      {
          label: 'Trash',
          icon: "assets/showcase/images/dock/trash.png"
      }
  ];
    this.data = {
            labels: ['Crop','Fertilizer','Pesticide'],
            datasets: [
                {
                    data: this.arr,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };


    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };

  }

}
