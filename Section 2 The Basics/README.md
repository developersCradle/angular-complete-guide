# Section 2 The Basics

The Basics

# What I Learned

- Bootstrap Css, in this course
- `npm install --save bootstrap@3`
    - `@3` Version 3
- `src\styles.css` defines styles for usage in globally
- include bootstrap styles in `angular.json`

```
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
```

- Verifying that bootsrap css is included
    - DeveloperTools/Sources/Css and see comments
    
<img src="VerifyIng.PNG" alt="alt text" width="600"/>

- app.component.hmtl is rendered 

- inside index.html there `<app-root></app-root>` where angular compoment is imported

<img src="appRoot.PNG" alt="alt text" width="600"/>

- main.ts is started first, it will bootstrap `app.module.ts`
    - `app.module.ts` in return starts spefied component

<img src="bootStrap.PNG" alt="alt text" width="600"/>

- Summary of angular bootsrap process

<img src="summary.PNG" alt="alt text" width="600"/>

- Angular in the end is JS framework which changes your DOM at runtime!

- Angular allows uss build app in smaller Components
    - Every **C** could be component
    - Every component  would have own html, css, bussiness logic
    - Components allows us to build complex sites into smaller compemets, not just one huge file

<img src="compementsLayout.PNG" alt="alt text" width="800"/>

- Every Component should have own folder
    - Not hard rule

- Component is just TypeScript class

```
export class ServerCompoment {
    
}

```

- Spesifies that we want to import this class elsewhere 
- Decoratos are to enhance your `.ts` classes/elements
    - `@Compoment()` compoment decorator, decorators are always starts with `@`

- ` import { Component } from `@angular/core`; `
    - We want import Component from `@angular/core`
        - Angular has many packages, one of which have many core features is `@angular/core`

```

@Component({
  selector: 'app-server', //Should use unique selector
})

```
- We can pass JS object to configure angular decorator
    - Will be stored as **metadata** for this class
        - Tells angular what to do with this class
    - `selector` is such important metadata, html tag which u can use in your other compoents later 
- Angular uses **components** to build webpages
    - **Modules** are used to bundle different pieces into packages
- In our current case `app.module.ts` bundles our app
- We need to tell Angluar of our new component

```

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ServerCompoment } from './server/server.component';` // <-- Importing our server.copoment
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
     ServerCompoment // <--- We need add new copoments here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

- app.module.ts is just empty .ts class
    - We transform it to something else using decorators
- `bootstrap: [AppComponent]` Which components u should be aware of when starting application
- ` declarations:` Where to tell components, which **Angular** will be using, also need to tell to **TypeScript** where this Compoment is located `import { ServerCompoment } from './server/server.component';`
- `imports:` imports allows uss add other **modules** to this **module**

<img src="usingCompoment.PNG" alt="alt text" width="800"/>

- 1. using compements in html is to use selector tag

- We can also create compoments by using **CLI**
    - `ng generate`
        - Generates compoments
- Creating `servers` compoment
    -  `ng generate component servers` or using shorcut `ng g c servers`

<img src="usingCompoment.PNG" alt="alt text" width="800"/>

- Using our conpoment is our selector tag `<app-server></app-server>`


```

app-servers.component.html

<app-server></app-server>
<app-server></app-server>

```
- We can also nest other components as manytimes we want 
    - now we just use `<app-servers></app-servers>` to get two app-server components

- We can use inline template where we can use html insde ts code

- Each component **needs** **template** to have defined `templateUrl: './servers.component.html'` or `template`
    - We can use these in following manner(redline should be ignore!)

<img src="templateBefore.JPG" alt="alt text" width="800"/>

- Use external if much code

<img src="templateAfter.JPG" alt="alt text" width="800"/>

- Using `template`, we could use both ways defining template. This could be good if not so much code

<img src="definingCss.JPG" alt="alt text" width="800"/>

- We can define css for component multiline inline using  ` `` `
    - Or using  array notation multiple css files `styleUrls: ['./app.component.css', 'test.css']`
- Using file vs inline depends on how much code like in previous case

<img src="waysSelectingComponent.JPG" alt="alt text" width="800"/>

- Different ways making selector
    - .class selector
    - by defining attribute
    - typical selector

<img src="Databinding.JPG" alt="alt text" width="800"/>


- Databinging is communication
    - Fetch from server, or finished some calculation
    - We can pass data from Ts code into HTML code inside Template
    - Outputting data to hmtl template:
    - **String Interpolation** `({{ data }})`
        - `{{ }}` String Interpolation syntax
        - Between curly braces you need to put typescript expresion
        - `<p> {{'server'}} with ID {{ serverId }} is {{ serverStatus }}</p>`
        - In the end, returned type needs to be string
            - `{{'server'}}` is returning string  and `{{ serverStatus }}` is type defined inside Component .ts file. Or coul be function ``{{ getServerStatus() }}`
            - Number can be also converted into string in the end
            <img src="number.PNG" alt="alt text" width="600"/>

    - **Property Binding** `([property]="data")`
    - `[]` square brackets tells angular that we are using **Property Binding**
        - Binds field/state to attribute 
        - example`[disabled]=!allowNewServer` binding to disable, `allowNewServer`attribute
        - Angular works directly on the DOM property and not the HTML attribute.
        - We can also bind to different things, example directives or Angular components. Not always to html element propertyes
    - **Event Binding** `((event)="expression")`

    - **Two-Way-Binding** `([(ngModel)]="data")`
        - React to events and outputting stuff in same time

- Same results can be achieved using **Property Biding** or **String Interpolation**

```

<p>{{ allowNewServer }} </p><!--  Same results can be achieved -->
<p [innerText]="allowNewServer"></p>  <!--  Same results can be achieved -->

```

- **innerText** of element is text between opening and closing tag 
- Printing so text you should use c, change some property use **Property Binding**
    - DONT MIX THESE

```

<p [innerText]="{{allowNewServer}}"></p>

``` 
- There is no **String Interpolation** inside  **Property Biding**  

- Inside **Property Biding**  you need write valid ts code 

<img src="stringInterpolation.PNG" alt="alt text" width="800"/>

- **Event binding**
    - We could use **HTML Event Biding** `onclick="some"`

```

<button class="btn btn-primary"
[disabled]="!allowNewServer"
onclick="some">Add

```

- But, we are going to use **Angulars** Event Binding
    - **Event Binding** Syntax `()` -> `(click)="onCreateServer()"` -> onCreateServer() method which to execute
- Reversed variable name `$event`works only inside event binding

```
(input)="onUpdateServerName($event)"
```
- `$event` holds data and can be passed to click handler

<img src="argumentWorks.PNG" alt="alt text" width="800"/>

- `$event` works **only** between theese two **"** marks

- Handling/Catching event in ts code

```

  onUpdateServerName(event : Event)
  {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

 ```

- Event logged insde chrome console

 <img src="InputEventInConsole.PNG" alt="alt text" width="400"/>

- **target** is **hmtl element** where event was occured
    - **target.value** is what user entered
    - **.value** works only if event is type **IntputElement**
- For this reason we need to tell Ts this is type InputElement explicitly casting it `(<HTMLInputElement>event.target)`
- With this we can fetch input data and output into html temple if needed

 <img src="twoWayDatabinding.PNG" alt="alt text" width="600"/>


- Two-way databinding
    - Using both **Property Binding** and **Event Binding** syntax `[()]` 
- `ngModel` is **Directive**

```
<input 
type="text" 
 class="form-control" 
 [(ngModel)="serverName"]>
```
- If input event is fired, serverName is updated
    - **Two-way databinding** reacting to events in both ways




 <img src="WhatAreDirectives.PNG" alt="alt text" width="600"/>

    