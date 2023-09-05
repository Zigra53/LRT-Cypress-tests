
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT straipsniai su foto ', () => {
  it('LRT straipsniai su foto', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
 //  cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
  
cy.wrap
([

//--- foto --------------------------------------------------------------------------------
//straipsnis su vertikalių nuotraukų fotogalerijos įskiepiu
  '/naujienos/veidai/14/1543285/juozo-statkeviciaus-kolekcijos-pristatymo-sveciai-isiklause-i-jo-patarimus-rinkosi-juoda-elegancija', 
  '/naujienos/lietuvoje/2/1534813/orai-i-sali-verziasi-vesa-daug-kur-uzaus-stiprokas-vejas'
  
]).each(($el, index, $list)=>{ 
         cy.log('----------------------------> ' + index)
         cy.visit(MyTestingServer + $el) 
		 
		 cy.get('.inline-gallery__media-list').first().click().wait(2000) 
		 cy.get('button[aria-label="Next slide"]').click({ force: true }).wait(1000)
		 cy.get('button[aria-label="Next slide"]').click({ force: true }).wait(1000)
		 cy.get('button[aria-label="Close gallery"]').click({ force: true }).wait(1000)
		 
  		})
    cy.log('--- Pabaiga -------------------')
 
  })
  })
