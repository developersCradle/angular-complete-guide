import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() { 
    setTimeout(() => 
              {
                this.allowNewServer = true; //This would only work with ecmascript arrow function
              },2000);
  }

  ngOnInit(): void {
  }


  onCreateServer()
  {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServerName(event : Event)
  {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
