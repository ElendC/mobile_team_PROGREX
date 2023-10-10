# Expo Router Example

https://expo.github.io/router/docs/
Follow the quick setup guide!
**---------------------------------------------------------------------------------**
✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd ProgRex
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web
**---------------------------------------------------------------------------------**

1. If app == single page {skip_step}
else{
    Inside package.json
    Change main value:
#####           "main": "expo-router/entry"
}

2. Inside app.json add this:
#####           "scheme": "progrex" 
Enables deep linking. Without te app will always open at main page.

3. Inside babel.config.js add:     
#####           plugins: ['expo-router/babel'],


4. Create an app dir. -> index.js file
   Files inside app dir. will automatically become a route in the app. 
   ex:
      app/index.js => route: /
      app/home.js => route: home
      app/settings/index.js => route: /settings
      app/[user].js => route: dynamic path


Her nå:
https://docs.expo.dev/routing/create-pages/