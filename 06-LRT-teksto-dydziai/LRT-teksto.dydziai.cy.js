
import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'

describe('LRT fontai: tikrinimas, ar fontai atitinka Style guide', () => {
  it('Spalvos', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
//   cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST
   let MySelector = '.news'
// -------------------------------------------------------
cy.wrap
([

//--- tikrinamų straipsnių sąrašas
  '/naujienos/verslas/4/1923027/lietuvoje-sauguma-surade-ukrainieciai-griebiasi-ir-savu-verslu-gamina-stiklainiu-dangtelius-koldunus-ir-traskucius',
  '/ua/novini/1263/1928573/p-iatero-pravoslavnikh-sviashchenikiv-otrimali-ofitsiini-dokumenti-z-konstantinopolia-pro-dozvil-sluzhiti-kudi-priiti-na-nedil-nu-sluzhbu-u-vil-niusi-i-klaipedi'
  
]).each(($el, index, $list)=>{ 
   cy.log('---------------------------------> ' + index)
   cy.visit(MyTestingServer + $el) 
 
 
// Naujienų juosta puslapio viršuje
  cy.log('-----------------------------------')
  cy.log('Naujienų juosta puslapio viršuje')
  MySelector = '.news > .news__content > .news__title > a'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '14px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '500')

// Straipsnis
  cy.log('-----------------------------------')
  cy.log('straipsnis - kategorijos pavadinimas')
  MySelector = 'article > .d-flex > .info-block' //kategorijos pavadinimas
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '12px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '400')

  cy.log('-----------------------------------')
  cy.log('straipsnis - straipsnio antraštė ')
  MySelector = 'article > .title-block > .title-block__heading' // straipsnio antraštė
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '34px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '500')

// Straipsnio autorių pavardės   
  cy.log('-----------------------------------')
  cy.log('straipsnis - autorių pavardės  ')
  MySelector = 'article > .article-block__post-title > .avatar-group > .avatar-group__description > span > a'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '12px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '700')

// Straipsnio cover paveikslėlis  
  cy.log('-----------------------------------')
  cy.log('straipsnis - cover paveikslėlis')
  MySelector = 'article > .media-block > .media-block__description'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '14px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '400')

// Straipsnio LEAD'as  - dydis priklauso nuo "Aa" mygtuko
  cy.log('-----------------------------------')
  cy.log('straipsnis - LEAD ')
  MySelector = 'article > .article-block__content > .article-content > .text-lead'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '24.17px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '400')

// Naujienų stulpelis dešinėje
  cy.log('-----------------------------------')
  cy.log('Naujienų stulpelis dešinėje')
  MySelector = '.tab-pane > .swipe-news-list > .swipe-news-list__container > .news-list > .row > .col > .news > .news__content > .news__title > a'
  cy.get(MySelector).first().scrollIntoView().invoke('text').then((MyTitle) => {  cy.log('-->' + MyTitle) })
  cy.get(MySelector).first().should('have.css', 'color', 'rgb(0, 0, 0)')
  cy.get(MySelector).first().should('have.css', 'font-size', '16px')
  cy.get(MySelector).first().should('have.css', 'font-weight', '500')
 
 
})

cy.log('------- Pabaiga ---------')
})
})


