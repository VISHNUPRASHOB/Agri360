import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
logme! : any;
  constructor(private router : Router) { }
  items!: MenuItem[];

  ngOnInit() {
    this.logme = localStorage.getItem('LogIn');
    console.log(this.logme)
  //   this.items = [
  //     {
  //       label: 'Settings', icon: 'pi pi-fw pi-cog',
  //       items: [
  //           [
  //               {
  //                   label: 'Agro Data',
  //                   items: [{label: 'Agro data',routerLink:"/agroinvest-component"}, {label: 'Loan Info',routerLink:"/loan-component"}]
  //               },
  //               {
  //                   label: 'Progress',
  //                   items: [{label: 'Dashboard',routerLink:"/dashboard-component"}, {label: 'Agro Utility'},{label:'LogOut',command: () => localStorage.clear(), routerLink:"/agroinvest-component"}]
  //               }
  //           ]
  //       ]
  this.items = [{
    label: 'Options',
    items: [{
        label: 'Loan Details',
        icon: 'pi pi-server',
        routerLink:"/loan-component"
    },
    {
        label: 'Farming Data',
        icon: 'pi pi-book',
        routerLink:"/agroinvest-component"
    }
    ]},
    {
        label: 'Personalized',
        items: [{
            label: 'Dashboard',
            icon: 'pi pi-desktop',
            routerLink:"/"
        },
        {
            label: 'LogOut',
            icon: 'pi pi-sign-out',
            command: () => this.logoutme(),
             routerLink:"/agroinvest-component"
        }
    ]}
];
  // ];

  }
  vald(){
    this.logme = localStorage.getItem('LogIn');
  } 
logoutme(){
  localStorage.clear();
  // window.location.reload();
}
}
