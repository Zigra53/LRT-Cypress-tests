//LRT mediatekos 1 psl. blokai (kompe ir mobiliam)

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT mediatekos 1 psl. - ar yra privalomi blokai?', () => 
{
  it('LRT mediatekos 1 psl. blokai (kompe ir mobiliam)', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/mediateka')  

//-----------------------------------
// Kategorijos, žymos blokų sąrašas
cy.wrap
([
'Tiesiogiai',
'Naujausi',
'Šią savaitę mes siūlome',
'Žinios',
'Filmai, kuriuos rekomenduojame',
'Gamtininko užrašai',
'Dienos tema',
'Auksinis protas',
'Ponių rojus',
'Beatos virtuvė',
'Panorama',
'Stilius'
]).each(($el, index, $list)=>{ 
         cy.log('-----------------> ' + index + '. '+$el)
         cy.get('.section__head').contains($el).scrollIntoView().wait(400)
		 //.click({ force: true })
		 //cy.go('back')
  		})

cy.log('------- Pabaiga ---------')

})
})


