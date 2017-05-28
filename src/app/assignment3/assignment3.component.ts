import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showSecret = false;
  clicks = [];
  constructor() { }

  ngOnInit() {
  }

  toggleDetailsDisplay(){
    this.clicks.push(new Date());
    this.showSecret = !this.showSecret;
  }

}
