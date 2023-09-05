// LRT-paieska-audioteka-mobiliam.js created with Cypress
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT paieška - audiotekos žinios', () => {
  it('Paieška Audiotekoje', () => 
  {
   cy.viewport(400, 800) //mobiliam
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST

   cy.visit(MyTestingServer+'/paieska') 

//-------------------------------------------------
// Straipsnių paieška 
cy.get('[aria-label="Mediateka"]').focus().click()
cy.get('[aria-label="Radioteka"]').focus().click()
cy.get('[aria-label="Filtruoti"]').focus().click()

//-------------------------------------------------
// Filtrų pasirinkimas (dropdown'uose, kai mažas langas)
// Audiotekos žinios
cy.get('button[id="categoryFilterTipasToggleButton"]').focus().click()
cy.get('[aria-labelledby="categoryFilterTipasToggleButton"]')
  .contains('Aktualijos').click()  
  
cy.get('button[id="categoryFilterTemaToggleButton"]').focus().click()
cy.get('[aria-labelledby="categoryFilterTemaToggleButton"]')
  .contains('Žinios').click()  
  
cy.get('button[id="categoryFilterPavadinimasToggleButton"]').focus().click()
cy.get('[aria-labelledby="categoryFilterPavadinimasToggleButton"]')
  .contains('Žinios').click()  
  
cy.get('.search-block__results').contains('Rodoma') 

  })
  })

