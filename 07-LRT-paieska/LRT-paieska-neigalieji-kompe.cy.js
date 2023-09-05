import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT paieška - įrašai neįgaliesiems', () => {
  it('Paieška kompe', () => 
  {
   cy.viewport(1200, 800) //kompe
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/paieska') 

//-------------------------------------------------
cy.get('[name="isForDisabled"]')
  .focus().click({force: true})

cy.get('[aria-label="Su titrais"]')
  .focus().click().wait(3000)  

  cy.get('[aria-label="Gestų kalba"]')
  .focus().click().wait(3000)  
 
cy.get('[aria-label="Su garsiniu vaizdavimu"]')
  .focus().click().wait(3000)  

  })
  })

