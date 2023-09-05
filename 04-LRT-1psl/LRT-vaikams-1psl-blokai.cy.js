//LRT radiotekos 1 psl. blokai (kompe ir mobiliam)

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT radiotekos 1 psl. - ar yra privalomi blokai?', () => 
{
  it('LRT radiotekos 1 psl. blokai (kompe ir mobiliam)', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/vaikams')  

//-----------------------------------
// Kategorijos, žymos blokų sąrašas
cy.wrap
([
'Laidos vaikams',
'Filmai vaikams',
'Vakaro pasaka'
]).each(($el, index, $list)=>{ 
         cy.log('-----------------> ' + index + '. '+$el)
         cy.get('.section__head').contains($el).scrollIntoView().wait(400)
		 //.click({ force: true })
		 //cy.go('back')
  		})

cy.log('------- Pabaiga ---------')

})
})


