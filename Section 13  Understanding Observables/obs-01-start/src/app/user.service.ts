import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'}) //Modern way inject
export class UserService {
    activedEmmitter = new Subject<boolean>(); //Subject is never, litle bit like emmitter  
    // activedEmmitter = new EventEmitter<boolean>(); //Emmitting something 

}