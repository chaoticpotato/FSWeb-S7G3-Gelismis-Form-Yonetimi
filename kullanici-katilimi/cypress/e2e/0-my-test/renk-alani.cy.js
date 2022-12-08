/* eslint-disable no-undef */

// sayfa açıldığında boş mu? y
// buton disabled mı? y

// tek karakter varsa button disabled oldu mu? y
// 2 ve daha uzun şey yazıldıysa button enabled oldu mu? y

// buttona tıklandıktan sonra input sıfırlandı mı? y
// yazılan renk bga verildi mi? 

// yazılan rengi backgrounda vereceğiz

describe('sayfayı aç', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('inputun içi var mı?', () => {
    cy
      .get('.cy-renkInput')
      .should('have.value', '')
  })

  it('buton disabled mı?', () => {
    cy
      .get('.cy-submit')
      .should('be.disabled')
  })
  // tek karakter varsa button disabled oldu mu?


  it('tek karakter yaz, buton hala disabled mı?', () => {
    cy
      .get('.cy-renkInput')
      .type('t')
      .should('have.value', 't')

    cy
      .get('.cy-submit')
      .should('be.disabled')
  })

  it('iki karakter yaz, buton enabled oldu mu?', () => {
    cy
      .get('.cy-renkInput')
      .type('te')
      .should('have.value', 'te')

    cy
      .get('.cy-submit')
      .should('not.be.disabled')
  })

  it('butona tıkladığında input sıfırlandı mı?', () => {
    cy
      .get('.cy-renkInput')
      .type('te')
      .should('have.value', 'te')

    cy
      .get('.cy-submit')
      .click()
  })

  it('butona tıkladığında rengi bgye verdi mi?', () => {
    cy
      .get('.cy-renkInput')
      .type('rebeccapurple')
      .should('have.value', 'rebeccapurple')

    cy
      .get('.cy-submit')
      .click()

    cy.wait(3000);

    cy
      .get("body")
      .should(
        "have.css",
        "background-color",
        "rgb(102, 51, 153)"
      )
  })


})