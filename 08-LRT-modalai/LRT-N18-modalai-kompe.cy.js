// created with Cypress

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'


describe('LRT modalai: langų atidarymas kompe', () => {
  it('Modalai', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
//   cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
    
cy.wrap
([

//--- N-18, N-7 --------------------------------------------------------------------------------
  '/naujienos/lietuvoje/2/1109283/vilniaus-lazdynu-ligonine-neteko-perspektyvaus-gydytojo-perdege-medikai-pagalbos-nesulaukia', //straipsnis
  '/mediateka/irasas/2000123976/trumpametrazis-filmas-plikas-ziaurumas-n-18'	//įrašas	 
  
]).each(($el, index, $list)=>{ 
         cy.log('-----------------------------------------------> ' + index)
         cy.visit(MyTestingServer + $el) 
 		 cy.get('button').contains('Man jau yra').click({ force: true }) 
  		})
  
  })
  })
