import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
//Selector of the element
  
  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput : HTMLInputElement) {
    console.log(this.serverContentInput);
    // this.serverContentInput.nativeElement.value = 'Something'; This is bad way manipulating DOM element
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

}
