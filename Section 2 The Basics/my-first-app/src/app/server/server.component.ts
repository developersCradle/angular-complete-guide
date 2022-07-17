import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // Use here unique selector
    templateUrl: './server.component.html'
})


export class ServerCompoment {
    serverId: number = 10;
    serverStatus: string = 'OFFLINE';


    getServerStatus(){
        return this.serverStatus;
    }
}