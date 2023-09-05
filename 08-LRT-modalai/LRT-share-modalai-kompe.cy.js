import '../ignore-errors-silence-log.cy.js'
import { SetMyTestingServer } from '../set-my-testing-server.cy.js'


describe('LRT modalai: langų atidarymas ant TESTo', () => {
  it('Modalai', () => 
  {
   cy.viewport(1200, 800) //kompo ekrano dydis
//   cy.viewport(400, 800) //mobilaus dydis
   let MyTestingServer = SetMyTestingServer () //testuojam LIVE arba TEST

   cy.log('SHARE MODAL -------------------------')
   
cy.wrap
([

//--- Straipsnio psl., Mediatekos įrašo, Audiotekos įrašo, Žymos, Lituanica puslapiai su Share mygtukais
 '/naujienos/lietuvoje/2/1553883/del-migracijos-krizes-vrm-siulo-dar-menesiui-pasienyje-pratesti-nepaprastaja-padeti', 
 '/naujienos/lrt-tyrimai/5/1467256/lrt-tyrimas-zmoniu-kontrabandos-schemose-dalyvauja-ir-lietuviai-verslininkai-migrantus-gabena-mikroautobusais', //longread
 '/naujienos/lrt-tyrimai/5/1547711/lrt-tyrimas-riausiu-anatomija-dalyviai-kurstytojai-rysiai-ii-dalis', //longread-story
 '/mediateka/irasas/2000188403/zinios-nuo-rytojaus-dalis-darbuotoju-uz-covid-19-testus-tures-moketi-patys',  
 '/mediateka/irasas/2000188351/aktualus-pokalbis-ar-brokuotu-opozicijos-pavadintas-biudzeto-projektas-bus-keiciamas', 
 '/tema/gintare-skaiste',
 '/lituanica/istorijos/752/1534265/viename-seniausiu-europos-universitetu-buvo-mokoma-ir-lietuviu-kalbos'
  
]).each(($el, index, $list)=>{ 
         cy.log('---------------------------> ' + index)
         cy.visit(MyTestingServer + $el)
		 
		 cy.get('button[aria-label="Dalintis nuoroda"]').first().focus().click({ force: true }).wait(100)
		 cy.get('div[role="dialog"]').contains('Dalintis').type('{esc}') 
  		})

// EN, RU, PL, UA Share langai ir mygtukai kitaip vadinasi :(
   cy.log('-----------------------------------> EN ')
   cy.visit(MyTestingServer + '/en/news-in-english/19/1553920/lithuania-s-interior-ministry-wants-to-extend-state-of-emergency-over-migrant-crisis') 
   cy.get('button[aria-label="Share url"]').last().focus().click({ force: true }).wait(100)
   cy.get('div[role="dialog"]').contains('Share').type('{esc}') 

   cy.log('-----------------------------------> RU ')
   cy.visit(MyTestingServer + '/ru/novosti/17/1553812/opros-kak-zhiteli-litvy-otsenivaiut-politiku-strany-v-otnoshenii-belarusi-i-kitaia') 
   cy.get('button[aria-label="поделиться ссылкой"]').first().focus().click({ force: true }).wait(100)
   cy.get('div[role="dialog"]').contains('Делиться').type('{esc}') 

   cy.log('-----------------------------------> PL ')
   cy.visit(MyTestingServer + '/pl/wiadomosci/1261/1940577/polska-pustoszeje-coraz-wiecej-miast-traci-mieszkancow') 
   cy.get('button[aria-label="Udostępnij"]').first().focus().click({ force: true }).wait(100)
   cy.get('div[role="dialog"]').contains('Udostępnij').type('{esc}') 

   cy.log('-----------------------------------> UA ')
   cy.visit(MyTestingServer + '/ua/novini/1263/1935370/z-dvoma-dit-mi-odnim-riukzakom-ta-velicheznoiu-mriieiu-iak-ukrayinka-z-nulia-vidkrila-svii-magazin-u-litvi') 
   cy.get('button[aria-label="ПОДІЛИТИСЯ"]').first().focus().click({ force: true }).wait(100)
   cy.get('div[role="dialog"]').contains('Поділитися').type('{esc}') 
   
    cy.log('--- Pabaiga -----------------------')

  })
  })
