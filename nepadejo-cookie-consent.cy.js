//siekiama, kad neatsidarinėtų CookieBot langas, kuris užstoja testuojamus dalykus

export function SetCookieConsent(MyTestingServer) {

if (MyTestingServer == 'https://www.lrt.lt') //ant TEST'o nėra cookies
{
  cy.wait(1000)
  cy.log ('Sutinku su cookies')
  cy.setCookie('CookieConsent', '{stamp:%27LIC6//gMYSpH/t4Av4KzKIiccE0JrwcypahokQb0vwKbFPCc4dmuHQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1679685925132%2Cregion:%27lt%27}') 

//kartais vis tiek išlenda slapukų langas Šeimų marše 
// cy.get('.CybotCookiebotDialogBodyButton').contains('Leisti visus slapukus').click({force: true})  


} 
}
