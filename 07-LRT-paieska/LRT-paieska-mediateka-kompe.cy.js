import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT paieška - mediatekoj kompe', () => {
  it('Paieška kompe', () => 
  {
   cy.viewport(1200, 800) //kompe
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/paieska') 

//-------------------------------------------------
// Straipsnių paieška 
cy.get('[aria-label="Mediateka"]').focus().click()
cy.get('[aria-label="Radioteka"]').focus().click()
cy.get('[aria-label="Filtruoti"]').focus().click()

//-------------------------------------------------
// Filtrų pasirinkimas (lentelėj, kai didelis langas)
// Audiotekos žinios

cy.get('[aria-labelledby="categoryFilterTipasToggleButton"]')
  .contains('Menas ir kultūra').click()  
  
cy.get('[aria-labelledby="categoryFilterTemaToggleButton"]')
  .contains('Kultūra').click()  
  
cy.get('[aria-labelledby="categoryFilterPavadinimasToggleButton"]')
  .contains('Atodangos').click()  
  
cy.get('.search-block__results').contains('Rodoma') 
 

  })
  })

