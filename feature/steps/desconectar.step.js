import 'jest';

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./feature/features/desconectar.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature(feature, test => {
    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test('Desconectar sesion', ({ given, when, then}) => {
        given('Un usuario con la sesion iniciada', async () => {
            browser = await puppeteer.launch({headless: false});
            page = await browser.newPage();

            await page.goto("http://localhost:3000/", { waitUntil: 'networkidle2'});

            await page.evaluate(() => {
              let btns = [...document.querySelectorAll("button")];
              btns.forEach(async function (btn) {
                if (btn.firstChild.innerText == "Iniciar Sesión"){
                  btn.click();
                }      
              });
            });
              
              const [popup] = await Promise.all([
                new Promise(resolve => page.once('popup', resolve)),
              ]);
              
  
              await popup.waitForSelector("input");
              await popup.type("input", "https://adrifa13.solid.community/profile/card#me");
  
              await popup.evaluate(() => {
                  let btns = [...document.querySelectorAll("button")];
                  btns.forEach(function (btn) {
                    if (btn.innerText == "Go"){
                      btn.click();
                    }      
                  });
                });
      
              await popup.waitForNavigation({
                waitUntil: 'networkidle2'
              });
  
              await popup.waitForSelector('[id="username"]', {visible: true});
              await popup.type('[id="username"]', "adrifa13");
        
              await popup.waitFor(500);
              await popup.waitForSelector('[id="password"]', {visible: true});
              await popup.type('[id="password"]', "Adrifa1309?", {visible: true});
        
              await popup.waitFor(500);
        
              await popup.evaluate(() => {
                let btns = [...document.querySelector(".form-horizontal.login-up-form").querySelectorAll("button")];
                btns.forEach(function (btn) {
                  if (btn.innerText == "Log In")
                    btn.click();
                });
              });
        });

        when('pulsa el boton de desconectar', async () => {
            await page.waitFor(500);

            await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(async function (btn) {
                  if (btn.innerText == "Desconectar"){
                    btn.click();
                  }      
                });
              });
              await page.waitFor(500);
        });

        then('nos desconecta', async () => {
            await page.waitFor(500);
            await page.waitForSelector('.container', {visible: true});
            expect(page.url()).toBe("http://localhost:3000/");
            
            await browser.close();
  
        });


    })
    
})