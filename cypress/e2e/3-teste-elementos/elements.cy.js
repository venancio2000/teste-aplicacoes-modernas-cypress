
/// <reference types="cypress" />

describe("work with basic e elements", () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    } )
    before(() => {
        cy.reload()
    } )
    it("Text", () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain', 'Campo de Treinamento')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
    it('Link', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
    it('TextFildes', () => {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Textarea')
            .should('have.value', 'Textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???')


        cy.get('[data-cy=dataSobrenome]')
            .type('Teste123456{backspace}{backspace}')
            .should('have.value', 'Teste1234')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay:100})
        .should('have.value', 'acerto')

    })
    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name=formSexo]").should('have.length', 2)
    })

})