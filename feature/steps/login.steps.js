import 'jest';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { givenName } from 'rdf-namespaces/dist/foaf';

const feature = loadFeature('./feature/features/login.feature');
const puppeteer = require('puppeteer')
let browser = null;
let page = null;

defineFeature(feature, test => {
    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test('Iniciar Sesion', ({ given, when, and, then}) => {
        given('Un usuario intenta iniciar sesion', async () => {
            browser = await puppeteer.launch({headless: false});
            page = await browser.newPage();
            
            await page.goto("htpp://localhost:3000/", { waitUntil: 'networkidle2'});
        
        });

        when('introduce el WebId', async () => {

            //
            //
    
            await page.evaluate(() => {
              let btns = [...document.querySelectorAll("button")];
              btns.forEach(function (btn) {
                if (btn.innerText == "Identificate"){
                  btn.click();
                }      
              });
            });

            await page.waitForSelector(".sc-EHOje.cffgrt");
            await page.type(".sc-EHOje.cffgrt", "https://adri13fa.solid.community/profile/card#me");

            await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(function (btn) {
                  if (btn.innerText == "Go"){
                    btn.click();
                  }      
                });
              });
    
            await page.waitForNavigation({
              waitUntil: 'networkidle2'
            });
    
        });

        and('rellena el formulario', async () => {
  
            await page.waitForSelector("[id='username']", {visible: true});
            await page.type("[id='username']", "adri13fa");
      
            await page.waitFor(500);
            await page.waitForSelector("[id='password']", {visible: true});
            await page.type("[id='password']", "Adrifa1309?", {visible: true});
      
            await page.waitFor(500);
      
            await page.evaluate(() => {
              let btns = [...document.querySelector(".form-horizontal.login-up-form").querySelectorAll("button")];
              btns.forEach(function (btn) {
                if (btn.innerText == "Log In")
                  btn.click();
              });
            });
        });

        then('nos muestra la pagina', async () => {
  
            await page.waitForNavigation({
              waitUntil: 'networkidle2'
            });
  
            expect(page.url()).toBe("http://localhost:3000/");
            expect(page).toContain('<section><div class="col-sm"><span>Estas logueado como: <a href="https://adrifa13.solid.community/profile/card#me">Adrian Fernandez Alonso</a></span></div></section>');
  
        });


    })
    
})