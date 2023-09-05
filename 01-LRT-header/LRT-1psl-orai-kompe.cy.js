//LRT 1 puslapis - ar yra Orai kompe?

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT 1 puslapis - ar yra Orai kompe?', () => 
{
  it('LRT 1 puslapis, orai kompe', () => 
{

   cy.viewport(1200, 800) //kompo ekrano dydis

   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer) 

   cy.get('.weather-widget').click()
   cy.get('h1').contains('Orai') // puslapio antraštė
   cy.get('h2').contains('Orai') // Orų naujienų blokas

   cy.log('------- Pabaiga ---------')

})
})



