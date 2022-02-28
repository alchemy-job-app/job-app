# Good Job Epic Plan

## User Story - MVP

User will first land on homepage, which will have an intro to the purpose of the app and a sign in and sign up header.

First-time user will sign up with a username, email, and password, and will be redirected to the sign in page. All users will sign in with email and password.

If successful, they will get redirected to the profile page which has a list of jobs. The job cards will be organized into two columns of 'in-progress' and 'completed'.

The user will be able to click on each individual card which will display the name of the company, the deadline to apply, the position applied for, the status of the application and any personal notes.

In the card detail, there will be an edit button that takes the user to an edit view which allows the user to edit the job card. There will also be a button to delete the card.

The header will give the user options to sign in/sign up or sign out, go to the about us page.

## App.js

### Home

- [ ] /

### About

- [ ] /about

### Auth view

- [ ] /sign-in
- [ ] /sign-up

### Profile View

- [ ] /profile

### JobCard

- [ ] /profile/:id

### Edit/Create

- [ ] /profile/:id/edit
- [ ] /profile/create

## Views

- [ ] Home view
- [ ] Auth view
- [ ] Profile
- [ ] JobCard
- [ ] Edit/Create
- [ ] About

## Components

- [ ] Header
- [ ] AuthForm
- [ ] JobList (renders job cards on profile view)
- [ ] JobForm (user can either create or edit a job, or delyeet)

## State

- [ ] user
- [ ] company
- [ ] deadline
- [ ] position
- [ ] status
- [ ] notes

## Hooks/Context

- [ ] useForm hook
  - [ ] useReducer that switches between cases of Create, Edit, Delete
- [ ] UserContext
- [ ] JobContext (this is where we can fetch our data with a useEffect)
