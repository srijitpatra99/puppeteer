const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start =  async () =>{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://www.icc-cricket.com/rankings/mens/team-rankings/odi");
        
        //Object for storing the data scraped from above web page
        var object = {
            last_updated:"",
            table:[]
        }
        const last_updated = await page.$eval("#main-content div div.l-sticky-side-nav__content div div section div.rankings-block__meta-container div:nth-child(1)", (ele) => ele.innerText);
        // console.log(last_updated);
        object.last_updated = last_updated;
        
        // Fetching the table data and storing as an array of objects
        const table = await page.$$eval("#main-content div div.l-sticky-side-nav__content div div section div.rankings-block__container.full.rankings-table table tbody tr", (rows) =>{
            //Array of objects
            var arr = [];
            
            for(row_object of rows)
            {
                var obj = Array.from(row_object.querySelectorAll("td")).map((ele,index) => {
                                    if(index == 1)
                                    return ele.querySelector("span.u-hide-phablet").innerText;
                                    return ele.innerText;
                                }).reduce((acc, cur, i) =>{
                                        if(i==0)
                                        acc["Pos"] = cur;
                                        else if(i==1)
                                        acc["Team"] = cur;
                                        else if(i==2)
                                        acc["Matches"] = cur;
                                        else if(i==3)
                                        acc["Points"] = cur;
                                        else if(i==4)
                                        acc["Rating"] = cur;
                                        else
                                        {
                                            acc["Rating"] = cur;
                                        }
                                        return acc;
                                    }, {});
                arr.push(obj);
            }       
            return arr;
        });

        object.table = table;
        // console.log(object);
        await fs.writeFile("Team-performance.json" , JSON.stringify(object));
        await browser.close();
}  

module.exports = {
    begin:start()
};
