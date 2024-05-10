# React-Expo-Mobile-App
This is a mobile app build using React Native and Expo. This is an example app demonstrating how to pull data from an API ([RapidAPI](https://rapidapi.com/matchilling/api/chuck-norris)) and store data locally using [Realm](https://www.mongodb.com/docs/atlas/device-sdks/sdk/react-native/). 

To spin up app first install dependencies
```console 
npm i 
```
Once installed, run
```console 
npx expo start
```

Use this command to prep ios test deployment (without paid developer account)
```console 
npm run build 
```

More configuration needed before deploying to local native ios device, info [here](https://github.com/expo/expo/discussions/27489)
