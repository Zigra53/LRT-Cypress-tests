
// -------------------------------------------------------
// https://docs.cypress.io/guides/tooling/visual-testing
// -------------------------------------------------------

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

let MyButton = '[aria-label="Pranešti apie klaidą"]'

describe('LRT spalvos: tikrinimas, ar spalvos atitinka Figmos piešinius', () => {
  it('Spalvos', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
//   cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST

// -------------------------------------------------------
MyButton = '[aria-label="Straipsniai"]' 
 
cy.visit(MyTestingServer + "/paieska")
//cy.get(MyButton).should('have.css', 'font-size', '12px')
//cy.get(MyButton).should('have.css', 'color', 'rgb(0, 0, 0)')
//cy.get(MyButton).should('have.css', 'background-color', 'rgb(242, 243, 246)')  

cy.get(MyButton).click().should('have.css', 'color', 'rgb(255, 255, 255)')
cy.get(MyButton).click().should('have.css', 'background-color', 'rgb(242, 243, 246)')		 
   
// -------------------------------------------------------
MyButton = '[aria-label="Pranešti apie klaidą"]'

cy.wrap
([
 '/naujienos/verslas/4/1923027/lietuvoje-sauguma-surade-ukrainieciai-griebiasi-ir-savu-verslu-gamina-stiklainiu-dangtelius-koldunus-ir-traskucius' 
 
]).each(($el, index, $list)=>{ 
         cy.log('------------------------> ' + index)
         cy.visit(MyTestingServer + $el) 
		 
		 cy.get(MyButton).should('have.css', 'font-size', '14px')
		 cy.get(MyButton).should('have.css', 'color', 'rgb(91, 95, 102)')
 		 cy.get(MyButton).should('have.css', 'border-color', 'rgb(218, 222, 229)')
 
         cy.get(MyButton).focus().should('have.css', 'color', 'rgb(91, 95, 102)')
         cy.get(MyButton).focus().should('have.css', 'border-color', 'rgb(151, 162, 182)')		 

		 })
  
  })
  })


