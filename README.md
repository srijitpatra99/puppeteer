# WEB SCRAPING WITH NODEJS
It is an API that scrapes the [# cricket points table](https://www.icc-cricket.com/rankings/mens/team-rankings/odi) website and store the data of the table and the last_updated info in Firebase Realtime Database. 
Continuously checks for changes in the website in every midnight and automatically updates the data in database. 

**Steps to run the api**
1. Create your account in the Firebase Realtime Database, download your credentials json file and add it to your project.
2. Run npm install.
3. Run node app.js to start the server.
4. Website data will be stored in your database after every 24 hours from the moment you start the server.
