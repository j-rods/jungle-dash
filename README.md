# Jungle Dash!

![screen_1](https://raw.githubusercontent.com/j-rods/jungle-dash/master/screens/1.png =300×369)
![screen_2](https://raw.githubusercontent.com/j-rods/jungle-dash/master/screens/2.png =300×369)
![screen_2](https://raw.githubusercontent.com/j-rods/jungle-dash/master/screens/3.png =300×369)

This is my attempt to recreate the famous flappy bird game. The game is built using the phaser HTML5 game framework. 
I was particularly interested in learning a bit more about the phaser framework, as it gives all the tools for building games on the browser.

The goal is to get as far as possible flying through the holes in the vines/pipes. These physics have been implemented with Phaser and Javascript.

Other functionality used are:
* Game ending/restarts(scoring reset) when bird hits a vine/pipe.
* Game ending/restart when bird X/Y is out of the set range in the frame.
* Spacebar required to keep bird "flying" on the screen.

### To install

To play this game in your local machine, do:

Clone this repo.

Install Node.JS
```
npm install npm@latest -g
```

Install HTML server
```
npm install http-server --save
```

Launch server 
```
node node_modules/http-server/bin/http-server
```

Open URL on browser(i.e 127.0.0.1:8080)
The game will now be running on the browser.

Press spacebar <kbd>SPACE</kbd> to fly through the vines.

## Technologies used
* Phaser HTML5 framework
* Javascript
* Node.js
* HTML5
