const config = require("./config.json")
const Aoijs = require("aoi.js")
const gm = require("gm");
const bot = new Aoijs.Bot({
    sharding: false,
    shardAmount: 1,
    mobile: false,
    token: config.token,
    prefix: ['*', '!'] 
}); //The login part.
//You can change the prefix to anything you want.
bot.onMessage({
    respondToBots: false
}); //Makes the bot scan messages.

//Put any callbacks between here \/




//Put any callbacks between here /\


const fs = require('fs'); //This is the commnd handler.

let dir = fs.readdirSync('./commands');

let i = 0;

handler: while (i < dir.length) {

    const stat = fs.statSync('./commands/' + dir[i]);

    if (stat.isDirectory()) {

        const readdir = fs.readdirSync('./commands/' + dir[i]);

        let nums = 0;

        while (nums < readdir.length) {

            dir.push(dir[i] + '/' + readdir[nums]);

            nums++;

        }

        i++;

        continue handler;

    } else if (stat.isFile()) {

        const command = require('./commands/' + dir[i]);

        try {

            bot[Object.keys(command)[0]](command[Object.keys(command)[0]]);

            i++;

            continue handler;

        } catch (err) {

            console.error(err.message);

            delete dir[i];

            continue handler;

        }

    } else {

        console.error('Directory was not a Folder or File');

        delete dir[i];

        continue handler;

    }

} 

