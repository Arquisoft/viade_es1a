import "jest";

import { defineFeature, loadFeature } from "jest-cucumber";
import { givenName } from "rdf-namespaces/dist/foaf";

const feature = loadFeature("./feature/features/login.feature");
const puppeteer = require("puppeteer")
let browser = null;
let page = null;
let jest;

defineFeature((feature, test) => {
    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test("Iniciar Sesion", ({ given, when, and, then}) => {
        given("Un usuario intenta iniciar sesion", async () => {
            browser = await puppeteer.launch({headless: false});
            page = await browser.newPage();

            
            
            await page.goto("http://localhost:3000/", { waitUntil: "networkidle2"});
        
        });

        when("introduce el WebId y rellena el formulario", async () => {

            //
            //
    
            await page.evaluate(() => {
              let btns = [...document.querySelectorAll("button")];
              btns.forEach(async function (btn) {
                if (btn.innerText === "Identificate"){
                  btn.click();
                }      
              });
            });
            
            const [popup] = await Promise.all([
              new Promise((resolve) => page.once("popup", resolve)),
            ]);
            

            await popup.waitForSelector("input");
            await popup.type("input", "https://adrifa13.solid.community/profile/card#me");

            await popup.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(function (btn) {
                  if (btn.innerText === "Go"){
                    btn.click();
                  }      
                });
              });
    
            await popup.waitForNavigation({
              waitUntil: "networkidle2"
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
                if (btn.innerText === "Log In"){
                  btn.click();
                }
              });
            });
            
          });

        then("nos muestra la pagina", async () => {
  
            expect(page.url()).toBe("http://localhost:3000/");
            await page.waitForSelector('[id="estasLogueado"]', {visible: true});
            await browser.close();
  
        });


    });
    
});