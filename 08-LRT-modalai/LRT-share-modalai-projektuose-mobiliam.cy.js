import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT modalai: langų atidarymas ant TESTo', () => {
  it('Modalai', () => 
  {
  cy.viewport(400, 800) //mobilaus dydis
  let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
  cy.log('SHARE MODAL -----------------------------')
   
cy.wrap
([

//--- Projektai --------------------------------------------------------------------------------
  '/projektai/seimos-gynimo-marsas',
  '/projektai/auksinis-protas',		 
  '/projektai/eurovizija',		 
  '/projektai/apdovanojimai',

 //--- Žmonės -----------------------------------------------------------------------------------		 
  '/zmones/antanas-sutkus'

  
]).each(($el, index, $list)=>{ 
         cy.log('----------------------------> ' + index)
         cy.visit(MyTestingServer + $el) 
		 
		 cy.get('button[aria-label="Dalintis nuoroda"]').first().focus().click({ force: true }).wait(100)
		 cy.get('div[role="dialog"]').contains('Dalintis').type('{esc}')
  		})
   cy.log('--- Pabaiga -----------------------')
  
  })
  })
