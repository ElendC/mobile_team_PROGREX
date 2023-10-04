Plan is to make a app where you can keep track of the number of pushups you do each session, to see if you've made progres. This will be like the PROGREX WebApplication on ElendC's github profile, but for IOS and Android.
If the WebApp is private, don't worry, it will be public again for view within a few days.

For my fellow team members, this is how we generate the template.
1. Terminal: npx express-generator (Get the Package if not already installed by pressing Y).
2. Terminal: npx express-generator --view=pug (Sets up folder templates)
Something like this should appear in the terminal:
   create : public\
   create : public\javascripts\ 
   create : public\images\
   create : public\stylesheets\
   create : public\stylesheets\style.css
   create : routes\
   create : routes\index.js
   create : routes\users.js
   create : views\
   create : views\error.pug
   create : views\index.pug
   create : views\layout.pug
   create : app.js
   create : package.json
   create : bin\
   create : bin\www

If node_modules folder appear, highlight it by clicking on it, and in the top search bar type gitignore. This like name suggests, ignores this when pushing to github.