//LRT cookies

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT 1 puslapis - ar yra Orai kompe?', () => 
{
  it('LRT 1 puslapis, orai kompe', () => 
{

   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer) 

   cy.getCookies().each( ($item, index) => {
        cy.log(index + '. ' + $item.name)
	    cy.log('      ' + $item.value)
	})
	cy.log('-----------------------------------')
	
 cy.wait(4000)

    cy.getCookies().each( ($item, index) => {
        cy.log(index + '. ' + $item.name)
	    cy.log('      ' + $item.value)
	})

	
   cy.log('------- Pabaiga ---------')

})
})



