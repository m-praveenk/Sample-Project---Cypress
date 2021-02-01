describe('product search', function(){
    beforeEach(() => {
        cy.visit('https://vuejs.mikesprague.me/shopping-cart/')
    })
    afterEach(() => {
      cy.screenshot()
    })
    
    it('Verify clicking on a button, item adds to a cart' , function (){
        cy.get('.col-sm-12:nth-child(1) li:nth-child(2) button.btn-default.btn-xs:nth-child(2)').should('exist')
        cy.wait(500)
        cy.get('.col-sm-12:nth-child(1) li:nth-child(2) button.btn-default.btn-xs:nth-child(2)').click()
        cy.get('div.col-xs-9 > small:nth-child(4)').should('be.visible')
    })
})