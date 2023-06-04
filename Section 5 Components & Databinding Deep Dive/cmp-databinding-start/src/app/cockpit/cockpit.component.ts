import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // to make properties work as events
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  // @Output() to pass something out of compenent
  
  newServerName = '';
  newServerContent = '';

  
  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput : HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent : this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent : this.newServerContent
    });
  }

}
