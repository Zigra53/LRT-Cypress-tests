// LRT naujienos: tikrinama straipsnio Naujienų srauto juosta

import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'
let MyResultsFile = './straipsniu-naujienu-juosta.txt'

describe('LRT naujienos: tikrinama straipsnio Naujienų srauto juosta', () => 
{
  it('Naujienų juosta', () => 
{
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST

   let arrayOfElementText = [];
 
//-----------------------------------
// išrenkam naujienas į sąrašą 
cy.visit(MyTestingServer + '/naujienos/lietuvoje/2/1941094/pilietinis-pasipriesinimas-ar-stipri-musu-valia')  

cy.get('.news__title').each( ($item, index) => {
if ( (index>-1) && (index<10)) //tikrinam naujienas
{  cy.wrap($item).children('a').invoke('attr', 'href').then((url) => 
  {  arrayOfElementText.push(url) 
     cy.log('-->' + index + '. ---> ' + url)

  });
}
})

cy.wrap(arrayOfElementText).as('myArray1')  

// tikrinam, ar naujienos atsidaro
//-----------------------------------
cy.writeFile(MyResultsFile, 'Naujienų juosta \r\n \r\n')
cy.get('@myArray1').each(($el, index, $list)=>
{ 
  cy.visit(MyTestingServer + $el) 
  cy.log('-------------------------------')
  cy.log('----> ' + index + '. ' + $el)
  cy.wait(200)
  cy.writeFile(MyResultsFile, index + '. ' + MyTestingServer + $el + '  \r\n', { flag: 'a+' })
  cy.get('.article-content').should('have.not.text','Atsiprašome, šio puslapio nepavyko rasti')

})

//-----------------------------------
cy.visit(MyTestingServer)  
cy.log('------- Pabaiga ---------')

})
})
