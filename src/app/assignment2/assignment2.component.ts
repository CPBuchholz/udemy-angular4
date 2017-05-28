import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html'
})
export class Assignment2Component implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = '';
  }

}
