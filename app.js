const fs = require("fs/promises");

const express = require("express");
const { v4:uuidv4} = require("uuid");
var cron = require('node-cron');

const scraping = require("./puppeteer");

const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/SRIJIT/Desktop/puppeter/puppeteer-9dc19-firebase-adminsdk-8st8m-e4e476dc84.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://puppeteer-9dc19-default-rtdb.firebaseio.com"
});

const database = admin.database();
const scoreboardRef = database.ref('/scoreboard');

app.use("/", async (req,res,next) =>{
    cron.schedule('*/58 */23 * * *', async () => {
        scraping.begin;
        var object = {};
        var Id = uuidv4();
        await fs.readFile("./Team-performance.json", "utf8")
                .then( value =>{
                    object = JSON.parse(value);

                    scoreboardRef.child(Id).set({
                        last_updated: object.last_updated,
                        points_table: object.table,
                    }, (value , err) => {
                        if(err)
                        return Promise.reject(err);
                        return Promise.resolve(value);
                    });
                })
                .catch( err => console.log(err));
        console.log('running a task every day');
    });
});

app.listen(3000, () => {
    console.log("Server started running on localhost: "+3000);
});