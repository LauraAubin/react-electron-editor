# React Electron Editor

#### This project creates an application to view and modify local files using React and Electron, backed by an Express server.

## Setup

From the root folder run,
```
$ npm install
```

Install dependencies with,
```
$ yarn setup
```

## Launch application
```
$ yarn start
```

# Description

### First off, **stop whatever you're doing. Your mind is about to be 🤯.**

### Ready?

![Bring it on](https://media.giphy.com/media/sNWGEbc5Jzp4c/giphy.gif)

<br>

When you run a React server, you access that app in a browser window. I mean that's pretty epic in itself. You can create a lot of amazing things, but what if you wanted to acess files on your computer. Your website is client side and you don't have access at this point, so you need to make a server.

![Suspense](https://media.giphy.com/media/l3vR1UUnuJU12rzs4/giphy.gif)

<br>

We can use Express to create our own server and proxy our React app to it's port 🙃. This gives us the power to use the FileSystem API with NodeJS. This API is pretty darn cool 😎. It has methods such as `readFile` and `writeFile`. What else more could you possibly need in life.

![Rainbow](https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif)

<br>

### I mean seriously, take that all in.

### You have managed to use the browser to send get and post requests to your server to edit local files.

### But wait. It gets better.

![Keep going](https://media.giphy.com/media/Zd1BUb0qs6nwjeMUBu/giphy.gif)

<br>

So all this time you've been accessing the app url in a browser window. Seems a little silly if we're not planning on publishing our website.

#### Is it time?

#### Is it really that time?

#### YES! Let's do it!

#### Introducing to the crowd we have the incredible, the amazing, the magical tool called,

### 🚀✨ ELECTRON ✨🚀

![Point](https://media.giphy.com/media/RrVzUOXldFe8M/giphy.gif)

<br>

So if we access our websites url in a new Electron window using a method intuitively named `loadURL`, we can literally run our project as an application!

#### And that's it!

#### That's how we managed to create an application using React to edit local files. Basically VS Code amirite 😄.

![Excited](https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif)
