// LRT pagrindinis meniu kompe

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT pagrindinis meniu kompe', () => {
  it('Pagrindinis meniu kompe, tikrinami keli punktai', () => 
  {
  cy.viewport(1200, 800) //kompe
  let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
  cy.visit(MyTestingServer).wait(100) //reikia palaukti, kol meniu užsikraus
 
//-------------------------------------------------
// meniu punktai turi atsidaryti, tikrinam papunkčius
cy.log('----------------- Aktualijos')
cy.get('.app-header__main-menu-link').contains('Aktualijos').click()
cy.get('[class="main-menu-links main-menu-links--two-columns"]').children()  
  .first()
  .should('have.text', 'Lietuvoje  ') 
  .next()
  .should('have.text', 'Sveikata  ') 
  .next()
  .should('have.text', 'Sportas  ') 
  .click().wait(200)

cy.log('----------------- Mediateka')  
cy.get('.app-header__main-menu-link').contains('Mediateka').click()
cy.get('[class="main-menu-links"]').children()  
  .first()
  .should('have.text', 'Pradžia  ') 
  .next()
  .should('have.text', 'Tiesiogiai  ') 
  .next()
  .should('have.text', 'TV laidos  ') 
  .click().wait(200)

cy.log('----------------- Radioteka')  
cy.get('.app-header__main-menu-link').contains('Radioteka').click()
cy.get('[class="main-menu-links"]').children()  
  .first()
  .should('have.text', 'Pradžia  ') 
  .next()
  .should('have.text', 'Tiesiogiai  ') 
  .next()
  .should('have.text', 'Radijo laidos  ') 
  .click().wait(200)
cy.log('------- Pabaiga ---------')
  
  })
  })


