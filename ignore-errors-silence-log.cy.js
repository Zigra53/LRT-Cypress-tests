
// visų testų pradžia

//-----------------------------------
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false 
})


//-----------------------------------
Cypress.on("log:added", (ev) => {
  if ((ev.displayName === "xhr") || (ev.displayName === "fetch")) { // don't log xhr and fetch
    const el = Array.from(window.top.document.querySelectorAll(".command-wrapper")).slice(-1)[0];
    if (el) {
      el.style.display = "none";
    }
  }
});

//-----------------------------------
// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "CookieConsent";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "ACCEPTED";

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});