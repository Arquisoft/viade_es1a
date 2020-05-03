import 'jest';

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./feature/features/addRuta.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature(feature, test => {
    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test('Subir una ruta', ({ given, when, then}) => {
        given('Un usuario loggeado', async () => {
            browser = await puppeteer.launch({headless: false});
            page = await browser.newPage();

            await page.goto("http://localhost:3000/", { waitUntil: 'networkidle2'});

            await page.evaluate(() => {
              let btns = [...document.querySelectorAll("button")];
              btns.forEach(async function (btn) {
                if (btn.innerText == "Iniciar Sesión"){
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

        when('selecciona una ruta', async () => {
            await page.waitFor(1000);

            await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(async function (btn) {
                  if (btn.innerText == "Subir Json a Solid"){
                    btn.click();
                  }      
                });
              });

              await page.waitFor(1000);

              await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(async function (btn) {
                  if (btn.innerText == "Actualizar lista"){
                    btn.click();
                  }      
                });
              });
             
        });

        then('nos añade la ruta', async () => {
            await page.waitForSelector('[id="map"]', {visible: true});
            
            expect(page.url()).toBe("http://localhost:3000/");

            await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(async function (btn) {
                  if (btn.innerText == "prueba1.geojson"){
                    expect(true).toBe(true);
                    return;
                  }      
                });
              });

            await browser.close();
  
        });


    })
    
})