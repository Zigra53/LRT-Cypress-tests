
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT fontai: tikrinimas, ar fontai atitinka Style guide', () => {
  it('Spalvos', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   let MySelector = '.news'
// -------------------------------------------------------
 
   cy.log('---------------------------------> ')
   cy.visit(MyTestingServer + '/programa') 
 
 
// 
  cy.log('-----------------------------------')
  cy.log('Transliacija negalima')
  MySelector = '.badge.badge-outline-danger.badge-sm'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })

 //-----------------------------------
// išrenkam programos dienas į sąrašą 
let arrayOfElementText = [];
cy.get('.dropdown-block__text').children().each( ($item, index) => 
{ 
if ((index % 2) == 1 )
{
  cy.wrap($item).invoke('text').then((url) => 
  { 
    arrayOfElementText.push(url.trim()) 
  });
}
})

cy.wrap(arrayOfElementText).as('myArray1') 
cy.get('[aria-label="Previous slide"]').first().scrollIntoView().wait(400).click({ force: true })
cy.get('[aria-label="Previous slide"]').first().scrollIntoView().wait(400).click({ force: true })
//cy.get('[aria-label="Previous slide"]').scrollIntoView().wait(400).click({ force: true })

//-----------------------------------
cy.get('@myArray1').each(($el, index, $list)=>
{ 
  cy.log('-->' + index + '. -->' + $el + '<---')
  cy.get('.dropdown-block__text').contains($el).scrollIntoView().wait(2000).click({ force: true })

})  
//-----------------------------------


cy.log('------- Pabaiga ---------')
})
})


