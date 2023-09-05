
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

let SezonoPradzia = new Date('2022.09.01')
let MyMedia = "tv" // arba "tv"
describe('LRT laidos: tikrinamas šio sezono laidų sąrašas', () => 
{
  it('Laidų sąrašas', () => 
{
   cy.viewport(400, 750) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   cy.visit(MyTestingServer + '/mediateka/' + MyMedia + '-laidos')
 
//-----------------------------------
// išrenkam šio sezono laidas į sąrašą 
let arrayOfNewElementText = [];
let arrayOfElementText = [];
//cy.get('[title="A"]').click({ force: true })

//-----------------------------------
cy.get('[aria-label="Rodyti tik šio sezono laidas"]').click({ force: true })
cy.get('.tag-list-block__item').each( ($item, index) => {
if ( (index>=790) && (index<800)) //tikrinam gabalais po 100, nes užstringa, kai tikrini 1000 įrašų nuorodas
{
  cy.wrap($item).children('a').invoke('attr', 'href').then((url) => 
  {  arrayOfElementText.push(url) 
     cy.log('-->' + index + '. --->' + url)

  });
}
})
cy.wrap(arrayOfElementText).as('myArray2') //visos laidos

//-----------------------------------
//ieškom realiai naujų laidų
//cy.writeFile('C:/Users/zivile/Documents/LRT/Cypress-testai/' + MyMedia + '-laidos.txt',  MyMedia + ' LAIDOS \r\nSezono pradžia: ' + SezonoPradzia + ' \r\n \r\n')
cy.get('@myArray2').each(($el, index, $list)=>
{ 
  cy.log('-->' + index + '. ' + $el)
  cy.visit(MyTestingServer + $el) 
  
  cy.get('.info-block__text').first().invoke('text').then((IrasoData) => 
  {
  const Data2 = new Date(IrasoData)
  const dateNow = Data2.toLocaleDateString()
 //  expect(Data2).greaterThan(SezonoPradzia)
  var diff_times =  Data2.getTime() - SezonoPradzia.getTime();
  var diff_days = Math.ceil(diff_times / (1000 * 3600 * 24));
  if(diff_days > 0) {
      cy.log('-->' + index + '. ---------------------->' + IrasoData)
 //      cy.log(diff_days) 

        cy.writeFile('C:/Users/zivile/Documents/LRT/Cypress-testai/' + MyMedia + '-laidos.txt', MyTestingServer + $el + ' \t  '+ IrasoData + '  \r\n', { flag: 'a+' })
    }
   })
})
//-----------------------------------

})
})