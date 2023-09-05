// LRT projektai pagrindiniam meniu kompe

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT projektai', () => {
  it('LRT projektai pagrindiniam meniu kompe', () => 
  {
  cy.viewport(1200, 800) //kompo ekrano dydis

  let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
  cy.visit(MyTestingServer).wait(100) //reikia palaukti, kol meniu užsikraus
 
//-------------------------------------------------
// meniu papunkčiai turi atsidaryti 
cy.get('.app-header__main-menu-link').contains('Projektai').click().wait(100)

//cy.get('.news__title').first().should('have.text', 'Auksinis protas') 
cy.get('.news__title').contains('Auksinis protas') 
cy.get('.btn').contains('Visi projektai').click({ force: true })

cy.get('.title-block__heading').contains('LRT projektai')

   
  })
  })


