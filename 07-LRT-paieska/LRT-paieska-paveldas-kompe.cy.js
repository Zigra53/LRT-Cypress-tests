// LRT-paieska-mediateka.js created with Cypress
//-----------------------------------
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT paveldas - paieška kompe', () => {
  it('Paieška kompe', () => 
  {
   cy.viewport(1200, 800) //kompe
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/paieska') 

//-------------------------------------------------
// Paveldo paieška 
cy.get('[name="isHeritage"]').focus().click({force: true})
cy.get('[aria-label="Rikiavimas"]').focus().select('Seniausi')
cy.get('[aria-label="Mediateka"]').focus().click()
cy.get('[aria-label="Video"]').focus().click()
  

  })
  })

