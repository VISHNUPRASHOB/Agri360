import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  timer: number = 5
  message: string ="";

  startCountdown() {
  
    let interval = setInterval(() => {
      if (this.timer != 0) {
        this.timer--
        console.log(this.timer);
        this.message = `Redirecting in ${this.timer}s...`;
      } else {
        clearInterval(interval)
        this.message = "";
      }
    }, 1000);
  }

}
