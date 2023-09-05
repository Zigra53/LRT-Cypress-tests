//LRT 1 puslapio blokai (kompe ir mobiliam)

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT 1 puslapis - ar yra privalomi blokai?', () => 
{
  it('LRT 1 puslapio blokai (kompe ir mobiliam)', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
//   cy.viewport(400, 800) //mobilaus dydis

   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer)  

//-----------------------------------
// Kategorijos, žymos blokų sąrašas
cy.wrap
([
'Tiesiogiai',
'Mediateka',
'Nuomonės',
'Rusijos karas prieš Ukrainą',
'Lietuvoje',
'Sveikata',
'Verslas',
'Eismas',
'Pasaulyje',
'Sportas',
'Kultūra',
'Gyvenimas',
'Veidai',
'Muzika',
'LRT tyrimai',
//užsienio kalbų blokai:
'News',
'Новости',
'Wiadomości',
'Новини'
]).each(($el, index, $list)=>{ 
         cy.log('-----------------> ' + index + '. '+$el)
         cy.get('.section__head').contains($el).scrollIntoView().wait(400)
//		   .click({ force: true })
//		 cy.go('back')
  		})
		
//-----------------------------------
cy.log('-----------------> BLOKAI Lituanica ir LRT faktai')
cy.get('h3').contains('Lituanica').scrollIntoView().wait(400)
//cy.get('h3').contains('LRT faktai') // nėra tokio bloko nuo 2023-03

cy.log('------- Pabaiga ---------')

})
})


