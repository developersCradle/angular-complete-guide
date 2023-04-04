# Section 3  Course Project - The Basics

We will build recipe book and shoping list app
    - Manange, View, modify

# What I Learned


<img src="OurAppPlan.PNG" alt="alt text" width="600"/>

- Little plannig below
- Our App will have Shopping List and Recipe Book applications
- Root will hold application
- Header, will navigate between these two applications
- **Model** Should be very clear, its good to know what information your app will be changing

<img src="AppErrorMessage.PNG" alt="alt text" width="300"/>

- Common error, `app-header is not a known element`
    - Forgot add to app.module our new component

- Creating component using generator **Old way**  `ng g c recipes --spec false` 
    - **New way** `ng g c recipes --skip-tests`
    - These commands **changes** time to time, check latest one when using this

<img src="generateCommand.PNG" alt="alt text" width="400"/>

- `ng g c recipes/recipe-list --skip-tests`
    - Will create `recipe-list` folder inside folder `recipes`

<img src="StructingFolderByFeature.PNG" alt="alt text" width="600"/>

- Its good habit to structure folder by feature as show in upper picture

`<div class="col-md-12">`

- The Bootstrap grid system has four classes: xs (phones), sm (tablets), md (desktops), and lg (larger desktops)

<img src="navBar.PNG" alt="alt text" width="700"/>

- Bootstrap navbar looks like

<img src="recipeModel.JPG" alt="alt text" width="700"/>

- 1. Since **Recipe** is common thought app we should make modal out of this class.
    - It creates layout how this object should work

    todo jäin 4:00