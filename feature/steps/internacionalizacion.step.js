import 'jest';

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./feature/features/internacionalizacion.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature(feature, test => {
    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test('Cambiar el idioma de español a ingles', ({ given, when, then}) => {
        given('Un usuario loggeado con la pagina en español', async () => {
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

              await page.waitFor(1000);

             await page.select('[id="select_languaje"]', "es");
            // await page.click('#select_id > option:nth-child(0)')
             //await page.select('select', "es");
             //await page.querySelector("#select_id").type("español").click();
           
             //const selectElem = await page.$('[id="select_id"]');
             
            // const selectElem = await page.$('.selectClass');///html/body/div[1]/div/div/section/nav/select
             //const selectElem = await page.waitForXPath('*[@id="select_id"]');
            // const selectElem = await page.;

             //
              //document.querySelector('select[id="select_id"]').selectedIndex = 0;
              //document.querySelector("#root > div > div > section > nav > select").selectedIndex = 0;
              //document.querySelector("#select_id").selectedIndex = 0;
             // document.querySelector("#select_id > option:nth-child(1)")
              //document.getElementById("select_id").selectIndex = 0;
            //})

            
            //await page.click("#select_id > option:nth-child(1)");
        });

        when('cambia el idioma a ingles', async () => {
          await page.waitFor(100);

          await page.select('[id="select_languaje"]', "en");

          await page.waitFor(1000);
        });

        then('nos cambia el idioma', async () => {
            await page.waitForSelector('[id="map"]', {visible: true});
            
            expect(page.url()).toBe("http://localhost:3000/");
            
           
            expect(page.$('[id="estasLogueado"]')).toEqual('<span id="estasLogueado" data-testid="usert"> Bienvenido,  <a href="https://adrifa13.solid.community/profile/card#me">Adrian Fernandez Alonso</a></span>');
            
            await browser.close();
  
        });


    })
    
})