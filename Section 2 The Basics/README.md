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
  selector: 'app-server', //Should use unique select
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

<img src="templateBefore.JPG" alt="alt text" width="800"/>

- Using `template`, we could use both ways defining template. This could be good if not so much code

<img src="definingCss.JPG" alt="alt text" width="800"/>

- We can define css for component multiline inline using  ` `` `
    - Or using  array notation multiple css files `styleUrls: ['./app.component.css', 'test.css']`
- Using file vs inline depends on how much code like in previous case

<img src="waysSelectingComponent.JPG" alt="alt text" width="800"/>

- different ways making selector
    - .class selector
    - by defining attribute
    - typical selector