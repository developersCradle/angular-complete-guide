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