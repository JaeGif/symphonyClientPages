# Symphony

This repo is the client for a websocket practice app. Symphony is a discord-like insant messaging service.

API src can be found here : [Api Src Repo](https://github.com/JaeGif/symphonyClientPages)
Live: [Site here](https://jaegif.github.io/symphonyClientPages/)

## Run Locally

clone: `$ git clone https://github.com/JaeGif/symphonyClientPages.git`\
Make sure you enter the project directory `$ cd symphonyClientPages/`\
install dependencies `$ npm i`

If you were to run at the moment you would notice the API and PATH vars are not set. Create a .env file. `$ touch .env`\
Copy and paste the following enviroment variables to the .env file and save.

```
VITE_BASE_URL = /symphonyClientPages
VITE_SOCKET_ADDRESS = https://symphonyserverrailway-production.up.railway.app
```

Finally, run the project: `$ npx vite`

The project is most likely available on [http://localhost:5173/symphonyClientPages](http://localhost:5173/symphonyClientPages).

## Current Features

This project was built to continue practicing the MERN stack, and to dive off the deep end learning about websockets, tailwind, and Typescript.

Fully Implemented Feautures:

- Room searching and joining
- Instant messaging with Socket.io
- Messages saved to MongoDB Atlas
- Room avatars and profile avatars
- User profile
- User settings
- Dark-mode/light-mode
- JWT Authentication
- Infinite Scroll (provided there is are more messages to see)
- Fully Responsive

Technologies used for this project:

- React
- Express
- Socket.io
- TailwindCSS
- Typescript
- React Query (Tanstack)
- Mongoose (Mongo DB ORM)
- Passport.js
- Multer & Sharp
- AWS S3
