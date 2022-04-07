# Job App

Great work team! Honestly it looks great and works well. Only a couple small bugs that I saw and I think this could be a really really helpful App for lots of Alchemy students. Let me know if you have any questions about this feedback!

* If you `setUser` after succesful registration you can redirect the user directly to profile (preventing them from having to auth twice)
* Nice job with making nested components -- I like the way you did InProgress and Complete but the two components are so similar I wonder if you could make them a single component and pass a prop to distinguish between the two lists
* Love the use of custom hooks! You can probably add the useForm hook into the Interview Form eventually
* Your create job page throws a 400 because of the useEffect in your useJob hook - you'll want to add a conditional in there so that it only calls the fetch if you have an id
* Great job implementing tailwind -- app looks great :)
* For some reason your pics aren't loading on your about page
* Code looks really clean -- love how simple most of the components are -- great work.
