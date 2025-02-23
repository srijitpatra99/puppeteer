Here's a well-structured and visually appealing **README.md** for your **Web Scraping with Node.js** project:  

---

# 🏏 Web Scraping with Node.js  

A **Node.js API** that scrapes the [Cricket Points Table](https://www.icc-cricket.com/rankings/mens/team-rankings/odi) and stores the **team rankings** and **last updated info** in a **Firebase Realtime Database**. This API continuously checks for changes **every midnight** and automatically updates the database to ensure real-time accuracy.  

---

## 🚀 Features  

✅ Scrapes **ICC Cricket Team Rankings** (ODI) automatically  
✅ Stores scraped data in **Firebase Realtime Database**  
✅ Runs every **24 hours** to keep data updated  
✅ Uses **Node.js, Cheerio, and Firebase Admin SDK**  

---

## 📂 Project Structure  

```
📦 Web-Scraping-NodeJS
 ┣ 📜 package.json
 ┣ 📜 app.js
 ┣ 📜 firebase-config.json  <-- Your Firebase credentials file
 ┣ 📜 README.md
 ┗ 📂 node_modules
```

---

## 🛠️ Setup & Installation  

### 1️⃣ Prerequisites  

Ensure you have the following installed:  
- **Node.js** (v14+ recommended)  
- **NPM** (Node Package Manager)  
- A **Firebase Realtime Database** account  

### 2️⃣ Clone the Repository  

```sh
git clone https://github.com/yourusername/web-scraping-nodejs.git
cd web-scraping-nodejs
```

### 3️⃣ Install Dependencies  

```sh
npm install
```

### 4️⃣ Set Up Firebase  

- Go to [Firebase Console](https://console.firebase.google.com/)  
- Create a **Firebase Realtime Database**  
- Generate your **Service Account Key** (JSON file)  
- Place the JSON file in the root folder and rename it to **firebase-config.json**  

### 5️⃣ Run the Scraper  

```sh
node app.js
```

🎯 The API will now fetch and store data in **Firebase** every **24 hours** automatically.  

---

## 📌 Usage  

Once running, the scraper will:  
1. Fetch the latest **Cricket Team Rankings** data  
2. Store it in **Firebase Realtime Database**  
3. Automatically update the database every **midnight**  

---

## 📷 Example Data  

```json
{
  "last_updated": "2025-02-22T00:00:00Z",
  "rankings": [
    {
      "rank": 1,
      "team": "India",
      "matches": 25,
      "points": 3200,
      "rating": 128
    },
    {
      "rank": 2,
      "team": "Australia",
      "matches": 23,
      "points": 2900,
      "rating": 126
    }
  ]
}
```

---

## 🛠 Technologies Used  

🔹 **Node.js** – Backend runtime environment  
🔹 **Cheerio.js** – Scraping and parsing HTML  
🔹 **Firebase Realtime Database** – Data storage  
🔹 **Cron Jobs** – Automating scheduled tasks  

---

## 📜 License  

This project is **open-source** and available under the **MIT License**.  

---

🔥 **Enjoy Scraping!** 🚀
