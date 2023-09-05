// LRT-paieska-Lituanica.js created with Cypress
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT paieška - Lituanica', () => {
  it('Paieška mobiliam', () => 
  {
   cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/paieska') 

//-------------------------------------------------
// Straipsnių paieška 
cy.get('[aria-label="Straipsniai"]').focus().click()
cy.get('[aria-label="Filtruoti"]').focus().click()


//-------------------------------------------------
// Filtrų pasirinkimas (dropdown'uose, kai mažas langas)
// Lituanica + Istorijos
cy.get('button[id="categoryFilterTipasToggleButton"]').focus().click()
cy.get('[aria-labelledby="categoryFilterTipasToggleButton"]')
  .contains('Lituanica').click({force: true})  
  
cy.get('button[id="categoryFilterTemaToggleButton"]').focus().click()
cy.get('[aria-labelledby="categoryFilterTemaToggleButton"]')
  .contains('Istorijos').click({force: true})  
cy.get('.search-block__results').contains('Rodoma') 
  
//-------------------------------------------------
//Ieškom pasirinkimo mygtukų "Lituanica" ir "Istorijos" ir juos uždarom
cy.get('button[aria-label="Istorijos"]').focus().click()  
cy.get('.search-block__results').contains('Rodoma') 

cy.wait(500) 
  
cy.get('button[aria-label="Lituanica"]').focus().click()  
cy.get('.search-block__results').contains('Rodoma') 
 
  })
  })
