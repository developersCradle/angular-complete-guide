# Section 13: Understanding Observables

 Understanding Observables

# What I Learned

- Observable can be thought as Data Source

- In Angular world Observable can be imported from **RxJS**

- Observable follows observable pattern, we have **Observer** and **Observable** 

<img src="observarable.JPG" alt="alt text" width="800"/>

1. Data streamline, here **event** is inputted into datastream
  - Example Angular HTTP service does it, when response is **emmitted** as **datapackage**
2. Subscribe function, your code goes here. Here you implement steps which are in mentioned in step **3.**
3. **Hooks** from Angular what happens if some states of **datapackage**

- Observable does not need to finish, example button click cannot finish 
- These tasks are usually async 

- In history, you used **callbacks** and **promises**
  - You **don't** need to use Observerables, its just different approach to handle these events

- Installing required software
- `npm install --save rxjs@6`
- `npm install --save rxjs@6`

```
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
```

- `params` is Observerable. Stream of route params. Subscribes are informed when is changed.
  - Function is passed as handler when stream data is changed 

- Observable are not in **js** or **ts** 
  - Its from RxJS
  - You can see it from package.json as import

<img src="rxJs.JPG" alt="alt text" width="500"/>

- Making our own observable

```
//Imported from
//import { interval } from 'rxjs';

    interval(1000).subscribe(count => {
      console.log(count);
    })
```
- Interval emmits observable where we can subscribe into
  - Happens every second
  - Keep in mind observables don't necessary stop emmitting values if you are not interested in them
    - Some does give on value like, HTTP request emmits one value then they are done

- Remember to **unsubscribe** from any observable if you are not interested in data
  - Memory leaks can be easily introduced
  - We **should** subscriptions

<img src="twoObservables.JPG" alt="alt text" width="500"/>

- Now if we click home page where our observable were created, there is now two observable going on in the same time

```
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
```
- We need start **unsubscribe()** when not needed

```
 this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
```
- Angular specific features are managed by Angular, no need manually unsubscribe them

```
    //Real Custom Observable
    let customIntervalObservable = Observable.create((observer) => 
    {
      let count = 0;
      setInterval(() => { //What does this Observable does
        // observer.error();
        // observer.complete();
        observer.next(count);
        count++;
      }, 1000)
    });

    //Subscribing to our custom observable. Give function which accepts data what we are emmitting
    this.firstObsSubscription = customIntervalObservable.subscribe((data) =>{
      console.log(data);
    });
```
- `observer` is the part where we write our logic for our **OBSERVER** **error**, **finished**, **new data**

- Now our own custom Observable roughly resembles predefined ` interval(1000)` Observer

```
  // this.firstObsSubscription = interval(1000).subscribe(count => {
  //   console.log(count);
  // })
```

- `Observable.create()` we need to create Observable, we tell the handling logic

- We need to tell our Observer, what to do when:
  - **Error** occurred `observer.error();` 
  - When observer **is done** `observer.complete();`
  - Let our observer know about **new data** `observer.next();`

- **Emmitting data** is most important what Observables do
  - Error handling is also important. For example in HTTP request

```
 if (count > 3) {
          observer.error(new Error("Count is greater 3!"));
        }
```
- Throwing error example
  - Error technically cancels Observable. Won't call **Complete** handler

<img src="ThrowingErrorInObserver.JPG" alt="alt text" width="700"/>

- **Handling error**, after first function comes

```
    //Subscribing to our custom observable. Give function which accpets data what we are emmitting
    this.firstObsSubscription = customIntervalObservable.subscribe((data) =>{
      console.log(data);
    }, error => { //handling error
      console.log(error);
      alert(error.message);
    });
```

- **Completing** observable
``` 
if (count == 2) {
  observer.complete();
}
```

175. Errors & Completion
7min

add handlers

- Todo structure this and check typos