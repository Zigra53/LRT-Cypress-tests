// LRT 1 puslapis, footeris kompe

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT 1 puslapis - ar yra footeris kompe?', () => 
{
  it('LRT 1 puslapis, footeris kompe', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer+ '/tema/kaunas')  

//slapukų langas		  
   if (MyTestingServer == 'https://www.lrt.lt' ) //ant TEST'o nėra slapukų
   {
     cy.wait(2000)
     cy.get('.footer__url-list').contains('Slapukų nustatymai').click({ force: true })
     cy.wait(2000)
     cy.get('[id="CybotCookiebotDialog"]').contains('Tik būtini slapukai').click({ force: true })
   }	  
   
//footerio mygtukai:   
   cy.wrap
   ([ 
     'Apie LRT', 'Kontaktai', 'Pranešimai', 'Rss'
   ]).each(($el, index, $list)=>
          { 
            cy.log('--------------- mygtukas --> ' + index + '. '+$el)
            cy.get('.footer__container').contains($el).first().scrollIntoView().focus().wait(400).click({ force: true })
 			cy.go('back')
	      })
 
// footerio sąrašas:
   cy.wrap
   ([ 'Naujienos', 'Mediateka', 'Privatumo politika']).each(($el, index, $list)=>
          { 
            cy.log('--------------- sąrašas --> ' + index + '. '+$el)
            cy.get('.footer__url-list').contains($el).first().scrollIntoView().focus().wait(400).click({ force: true })
 			cy.go('back')
  	      })

// social-list
   cy.wrap
   ([ 
     'Facebook', 'Twitter', 'Linkedin', 'Youtube'
   ]).each(($el, index, $list)=>
          { 
            cy.log('--------------- social --> ' + index + '. '+$el)
            cy.get('.social-list').contains($el).first().scrollIntoView().focus().wait(400)
			// neinu į soc. tinlus, nes iš ten Cypress negrįžta
	      })

		  
   cy.log('------- Pabaiga ---------')

})
})



