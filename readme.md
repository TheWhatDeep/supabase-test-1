# The Test
This github repo is meant to demonstrate the following tasks:

1. Demonstrate ability to work with Supabase and figure out RLS policies
2. Demonstrate usage of AI and resources like documentation and examples online
3. Show how RLS policies work and demonstrate a working example. 

*query.sql* should contain a runnable query in a postgres environment. You should be able to copy the query and just run it to set up the tables, policies, and columns associated with this example.

The users aren't set up, but for the sake of the demonstration I've made 3 unique users:

- *tim@test.com*: admin
- *john@test.com*: viewer
- *mike@test.com*: viewer

 The API should have already been setup in the *app.js* script. All you need to do is simply clone this repository into your local machine (either download as zip or via git) and run:

```
npm install
npm start
```

## Trial and error
I've run through many iterations of this code. Honestly, I couldn't have done it without the two most important AI assistants I had

- Supabase AI
- Google Gemini

***Supabase AI*** is aware of your queries and the entire database, which is why it was easy to decode the RLS policy issues I was facing. To be honest, it took me way more time that I should have just figuring out RLS. It's a foreign concept to me since I did not work with RLS policies before, but it's an incredibly handy tool to limit queries at a row level. 

***Google Gemini*** has been my go-to when it comes to just general knowledge deep-dives. It's been very helpful since it has its context window cover the entire google search library, and it even is aware of my other conversations. 

## Feedback
I'd love to know if I did well! Honestly this was my first time working with supabase. I had an account setup before, but I never played with it this much. It's eye opening and the free tier gives me a lot of leeway and a lot of ideas. Makes me think that I can make my own web app without paying much.

## Hours it took to complete
This entire project (minus the documentation diving and some reading) Took about 6-8 hours to complete combined. So, roughly about a single day of work.

## What is this and why?
Again, this is a simple script/test to see if the database works. Because we are targeting simplicity and are not trying complicate things, we went with the barest of bones when building this. Meaning no type-safety, no GUI, and definitely no user interaction other than the commands.

The database was built using minimal RLS policies to allow RBAC (Role-Based Access Control). Users were stored inside the `public.auth` table built-in to postgres, but their roles and permissions were stored in another table (following supabase documentation recommendation). This was done to ensure that:

1. We wouldn't need to fiddle with the payload being sent back to the server when accessing the data API;

2. We'd have security fully handled by the backend via RLS policies and RBAC.