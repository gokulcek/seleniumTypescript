const {until,By,Builder}=require('selenium-webdriver');
const {expect}=require('chai');

describe("selenium example",function(){
    let driver=new Builder().forBrowser('chrome').build();
    beforeEach("set up", async function(){
         await  driver.get("https://www.cricbuzz.com/");
        
    })
    afterEach("teardown", async ()=>{
         await driver.quit();
    })
    it("verifyTitle",async ()=>{
        const title=await driver.getTitle();
        await expect(title).to.equal("IPL 2021 Cricket Score, Schedule, Latest News, Stats & Videos | Cricbuzz.com")
    })
    

})

