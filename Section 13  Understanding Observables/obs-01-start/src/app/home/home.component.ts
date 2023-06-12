import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { count } from 'rxjs-compat/operator/count';
import { filter, map } from 'rxjs/operators';

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

// customIntervalObservable.pipe(map( (data : number) => { //Data is the emmited data which is coming from observable
//   return 'Round: ' + ( data + 1);
// }));


    //Subscribing to our custom observable. Give function which accpets data what we are emmitting
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data : number) => {
      return data > 0;
    }), map( (data : number) => { //Data is the emmited data which is coming from observable
      return 'Round: ' + ( data + 1);
    })).subscribe((data) =>{
      console.log(data);
    }, error => { //Erro handler
      console.log(error);
      alert(error.message);
    }, () => { // Completing handler, we could put cleanup process here
      console.log("Completed!")
    }
    );
  }
}
