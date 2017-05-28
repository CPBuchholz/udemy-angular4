import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.getLastServername();
    this.serverCreated = true;
  }

  getLastServername(){
    if (this.servers.length > 0){
      return this.servers[this.servers.length - 1];
    }
    return 'No created servers';
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
