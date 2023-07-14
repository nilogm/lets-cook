# Let's Cook!

A recipe search mobile app.

## Development

Requires [Node.js](https://nodejs.org/en/download) and [Expo Go](https://docs.expo.dev/get-started/installation/) to start development.

To start the npm server, run:

```bash
cd app
npm install
npm start
```

If you are using the Expo Go **mobile app**, scan the QR code.

If you want to use the **web version**, type "w" in the server terminal to show instructions on how to install and use the web version.

## Build preview

A preview build (.apk) can be created. Some configuration changes may have to be made before building.

The platform parameter specifies the build's operating system, and the profile parameter sets the purpose of the build (in this case, preview).

Keep in mind that:
 - developing an Android build is free, but an iOS build demands an Apple Developer Account, which is NOT free.
 - the default setting for the "profile" argument returns an "Application Store Build" (.aab), which cannot be installed without a license.

```bash
cd app
eas build --platform android --profile preview
```

```bash
eas build:config
```

## Team

- Guilherme Silveira Gomes Brotto
- Nilo Garcia Monteiro
