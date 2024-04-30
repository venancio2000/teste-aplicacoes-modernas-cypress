/// <reference types="cypress" />

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    } )
    before(() => {
        cy.reload()
    } )

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('funciona')

    })
    it('Uso do fild', () => {
        cy.get('#buttonList').click()
        cy.get('#Lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#Lista li')
        //    .find('span')
        //    .should('contain', 'Item 2')
        cy.get('#Lista li')
            .should('contain', 'Item 2')
    })
    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo,{timeout:1000}').should('exist')
        //cy.wait(5000)
        //cy.get('#buttonList').click()
        //cy.get('#Lista li', {timeout:4000})
        //    .find('span')
        //    .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get("#Lista li span", {timeout: 3000})
            .should('have.length', 2)
    })
    it('click rerty', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', "111")
    })
    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el =>{
            //.should('have.length', 1)
            //console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})
