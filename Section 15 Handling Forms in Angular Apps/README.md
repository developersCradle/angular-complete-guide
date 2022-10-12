# Section 15 Handling Forms in Angular Apps

 Handling Forms in Angular Apps

# What I Learned

- Single page application cannot have **form submit action**
  - Like in traditional html forms
- Angular helps you with forms
  - Checks if form is valid
    - Could make red underlin, if wrong input is found

<img src="AngularForms.PNG" alt="alt text" width="600"/>


- Exercise files needed to install depencies trought
 `npm install --legacy-peer-deps`

- What we would need
  - We would need to parsing the input values, Js object in your ts code to work with.
- Angular makes Js object representation of your form, to see state of it and work with it

<img src="twoApproachesToHandleForm.PNG" alt="alt text" width="600"/>

- Angular offer **two** approaches to handle forms
  - **Template-Driven** approach
    - Set form inside template htlm code
  - **Reactive** approach
    - Complex approach
      - Structure of form in ts
  
  <img src="formsExample.PNG" alt="alt text" width="600"/>

- No action should be spesified with this form, or method attribute
  - We don't want to make HTTP request with this button
    - We want Angluar to take care of this

- To get Angular to hande form need to do these steps:
  - Need import forms module in app.module.ts
  
  <img src="import.JPG" alt="alt text" width="500">

  - After importing think as such, where `<form>` serves as selector for Angular to create Js representation for you.

  - Angular cannot detect input inside form
    - Need to register controls manually
    - To register manually in  **Template-Driven** approach, just add `ngModel` to input you want to controll
      - Then we need to give it HTML attribute, example `name="username"`
  <img src="inputRegisterationToJsObjectRepresentationOfThisForm.JPG" alt="alt text" width="500">

  - `<select>` is also input and and its making dropdown list