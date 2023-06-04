# Section 5 Components & Data binding Deep Dive

Components & Data binding Deep Dive

# What I Learned

- Bundling angular app in smaller compoments can be benificial

- [cli commands](https://angular.io/cli/generate)
 
- Creating component at the time was `ng g c cockpit --skip-tests`

- Passing data between elements property & Event Binding
    - We send events and tell listen to some event

<img src="dataBinding.JPG" alt="alt text" width="400"/>

- 1. We can bind event binding to normal HTML elements
- 2. To directives, for exmample`ngClass` and `ngStyle`
- 3. To bind to our own element or invoking our **own** events

- `element : {}; ` element is JS Object

<img src="bindingError.JPG" alt="alt text" width="400"/>

- Binding custom error 

<img src="BindingErrorInCode.JPG" alt="alt text" width="500"/>

- 1. We cannot bind `element` from other component whiteout
    - By **default** all properties of component are accessible from within itself**
        - Generally good thing 
        - We can use **decorator** `@Input()` before field to make its parents able to access it.
            - Example. `@Input() element : { type : string, name : string, content : string};`
- We can access parent element using `[element]="serverElement"`

```

<div class="container">
  <app-cockpit></app-cockpit>
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <app-server-element
      *ngFor="let serverElement of serverElements"
      [element]="serverElement">
      </app-server-element>
    </div>
  </div>
</div>

```

- [input](https://angular.io/guide/inputs-outputs)

- We can make **alias** to access property from outside this component

```
@Input('srvElement') element : { type : string, name : string, content : string};
```

- `<app-cockpit (serverCreated)="onServerAdded($event)"></app-cockpit>`
    - App-cockpit is listening event **(serverCreated)** and when happening, it will call **onServerAdded($event)**

`serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();`

- `EventEmmitter` allow **emmit** own events
- `serverCreated` is now emitting events,
    - **<>** Data which data will be emmitting and and **()** to call constructor of emmitter

```
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent : this.newServerContent
    });
  }
```

- Emitting own our custom event by calling *.emit*

- Decorator passing something out of the component `@Output()`

- Example using output operator for following event 

`@Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();`

- Component communication is **key** feature of Angular

- There comes limit when making listener and output emmitter between two component is too great. This is resolved using services.

- Angular **encapsulates** .css to where Angular component belongs to.

<img src="cssEncapsulation.JPG" alt="alt text" width="800"/>

1. Angular enforces .css encapsulation by making use of attributes. **1.** following attributes are applied to specific component

- Angular Emulates shadow DOM
  - Shadow DOM is not supported by all browsers, so Angular emulates this.

- To disable components view encapsulation we can set using `encapsulation: ViewEncapsulation` Decorator

```
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.N
})
```

 - `encapsulation: ViewEncapsulation.None` removes view encapsulation 

 <img src="cssEncapsulationOFf.JPG" alt="alt text" width="800"/>

 - We cannot see these attributes anymore

-  `encapsulation: ViewEncapsulation.Native`
 uses ShadowDom

 - [ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

 - As reminder, this is for event binding `()`

 - We can consider replacing two-way data binding with **local reference** `#serverNameInput`
  - This will hold reference to whole **element**, not just to value at the element

  - We can pass the reference only in the **template** not in **ts file**

  - Example using local reference 
  ```
  <input 
      type="text" 
      class="form-control" 
      #serverNameInput>

  ```