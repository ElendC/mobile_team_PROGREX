WHAT HAVE WE DONE SO FAR?

1. Terminal: 
   - npm install expo-router
   - npx expo install react-native-web@~0.19.6

Using quick setup from: https://expo.github.io/router/docs/

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.        

- cd PROGREX_Mobile_APP
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to 
  do iOS development without a Mac
- npm run web


2. Create folder 'app' with files '_index.js' & '_layout.js'

3. The layout should render a "Stack" component, that defines how users can navigate througth the app.
4. in the index, import View and Text from react-native. View is like divs and Text basicly displays text.

5. Terminal: npm install expo-font axios react-native-dotenv.
   expo-font: Use custom fonts.
   axios: Obviously for making request to the server.
   react-native-dotenv: Allows you to use environment variables in your React Native app.

6. Start script missing in package.json? Add:   "start": "expo start"
   Run the app: npm start
   
   Not working on phone solution: npm install -g expo-cli
   Run the app: expo-cli start --tunnel

