import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // Use here unique selector
    templateUrl: './server.component.html'
})


export class ServerCompoment {
    serverId: number = 10;
    serverStatus: string = 'OFFLINE';



    constructor() 
    {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor()
    {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
}