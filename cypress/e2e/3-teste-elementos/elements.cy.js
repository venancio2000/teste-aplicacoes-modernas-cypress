
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
    it('checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')

    })
    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
        //TODO validar as opções do compo

        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)

        cy.get('[data-test="dataEscolaridade"] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members("Superios", "Mestrado")
        })

    })

    it.only('combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

        //TODO validar opções selecionada do combo multiplos

        //cy.get('[data-testid=dataEsportes]').should('have.value', ['natacao', 'Corrida', 'nada'])
        
        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })
        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
    })

})