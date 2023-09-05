// LRT-paieska-be-tipo.js created with Cypress
// ant TEST rodo laidas be tipo, jas turi sutvarkyti M.Valinevičiuos
// ant LIVE laidų "be tipo" neturi būti

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

   let MyTestingServer = 'https://www.lrt.lt'
//   let MyTestingServer = 'http://185.216.211.65:8080' // jei tikrinama ant TEST'o - ten testas nepraeis


describe('LRT paieška - neturi būti temų (be tipo).', () => {
  it('Paieška Audiotekoje', () => 
  {
   cy.viewport(1200, 800) //kompas
   cy.visit(MyTestingServer + '/paieska') 

//-------------------------------------------------
// Filtų pasirinkimas paieškoje 
cy.get('[aria-label="Mediateka"]').focus().click()
cy.get('[aria-label="Filtruoti"]').focus().click()
 
//-------------------------------------------------
// Ieškom laidų "(be tipo)" - tokių iš viso neturi būti 

cy.get('[aria-labelledby="categoryFilterTipasToggleButton"]')
  .contains('Visi')
  .click({force: true})

cy.get('[aria-labelledby="categoryFilterTemaToggleButton"]')
  .should('not.include.text','(be tipo)')


  })
})

