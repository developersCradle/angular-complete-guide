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

- Angular allows uss build app in smaller Componentsc
    - Every **C** could be component
    - Every component  would have own html, css, bussiness logic
    - Components allows us to build complex sites into smaller compemets, not just one huge file

<img src="compementsLayout.PNG" alt="alt text" width="800"/>