// LRT 1 puslapis, headeris kompe

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT 1 puslapis - ar yra headeris kompe?', () => 
{
  it('LRT 1 puslapis, headeris kompe', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/tema/vakaro-pasaka')  
   
   cy.wait(200)

 //headerio mygtukai:   
   cy.wrap
   ([ 
     'Programa','Susisiekite', 'Naujienlaiškis', 'Apie LRT'
   ]).each(($el, index, $list)=>
          { 
            cy.log('--------------- mygtukas --> ' + index + '. '+$el)
            cy.get('.app-header').contains($el).first().scrollIntoView().focus().wait(400).click({ force: true })
 			cy.go('back')
	      })
		  
   
// Kalbos
   cy.wrap
   ([ 
     'en', 'ru', 'pl', 'ua'
   ]).each(($el, index, $list)=>
          { 
            cy.log('--------------- kalba --> ' + index + '. '+$el)
            cy.get('.language-selection__item').contains($el).first().scrollIntoView().focus().wait(400).click({ force: true })
 			cy.go('back')
	      })

		  
   cy.log('------- Pabaiga ---------')
  
})
})



