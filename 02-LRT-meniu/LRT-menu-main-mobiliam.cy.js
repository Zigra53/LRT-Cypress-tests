// Pagrindinis meniu mobiliam

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT pagrindinis meniu mobiliam', () => {
  it('Pagrindinis meniu mobiliam', () => 
  {
  cy.viewport(400, 800) //mobilaus dydis
  let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
  cy.visit(MyTestingServer).wait(100) //reikia palaukti, kol meniu užsikraus

//-------------------------------------------------
// meniu papunkčiai turi atsidaryti 
cy.get('[title="Meniu"]').click()
cy.get('ul.m-0').children()  
  .first().click()
  .should('have.text', ' Aktualijos  ').click({force: true})
  
cy.get('[class="menu-block-sidebar-sub-list is-visible"]').children()   
  .first()
  .should('have.text', '    Aktualijos ')
  .next().children()  
  .first()
  .should('have.text', 'Lietuvoje ') 
  .next()
  .should('have.text', 'Sveikata ') 
  .next()
  .should('have.text', 'Sportas ') 
  .type('{esc}')
 
 
//meniu punktai turi būti tokie:
cy.get('[title="Meniu"]').click()
cy.get('ul.m-0').children()  
 // .should('have.length', 9)  //9 punktai
  .first()
  .should('have.text', ' Aktualijos  ')
  .next()
  .should('have.text', 'Epika ')
  .next()
  .should('have.text', ' Mediateka  ')
  .next()
  .should('have.text', ' Radioteka  ')
  .next()
  .should('have.text', 'Kultūra ')
  .next()
  .should('have.text', ' Laisvalaikis  ')
  .next()
  .should('have.text', ' Vaikams  ')
  .next()
  .should('have.text', 'Mano kraštas ')
  .next()
  .should('have.text', ' Projektai  ')
  .type('{esc}')
  
  })
  })


