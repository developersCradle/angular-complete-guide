import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription : Subscription;
  constructor() { }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

  ngOnInit() {
    //Build new Observable RxJS

    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    //Real Custom Observable

    let customIntervalObservable = Observable.create((observer) => 
    {
      let count = 0;
      setInterval(() => {
        if (count == 2) {
          observer.complete();
        }
        // observer.error();
        // observer.complete();
        observer.next(count);
        if (count > 3) {
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000)
    });

    //Subscribing to our custom observable. Give function which accpets data what we are emmitting
    this.firstObsSubscription = customIntervalObservable.subscribe((data) =>{
      console.log(data);
    }, error => { //handling error
      console.log(error);
      alert(error.message);
    });
  }
}
