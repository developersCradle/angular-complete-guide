# Section 15 Handling Forms in Angular Apps

 Handling Forms in Angular Apps

# What I Learned

- Single page application cannot have **form submit action**
  - Like in traditional html forms
- Angular helps you with forms
  - Checks if form is valid
    - Could make red underlin, if wrong input is found

<img src="AngularForms.PNG" alt="alt text" width="600"/>

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


- Todo tee tuo appi toimimaan