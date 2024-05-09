describe('helpers', () =>{
    it('wrap', () => {
        const obj = {nome: 'User', idade: '20'}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

          cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.get('#formNome').then($el => {
        //     // $el.val('funciona via jquery')
        //     cy.wrap($el).type('funciona via cypress')
        // })


        const promise = new Promise((resolve, refect) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'))
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botao'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    })
})