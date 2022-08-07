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

  constructor() { 
    setTimeout(() => 
              {
                this.allowNewServer = true; //This would only work with ecmascript arrow function
              },2000);
  }

  ngOnInit(): void {
  }

}
