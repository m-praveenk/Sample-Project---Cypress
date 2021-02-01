describe('product search', function(){
    beforeEach(() => {
        cy.visit('https://vuejs.mikesprague.me/shopping-cart/')
    })
    afterEach(() => {
      cy.screenshot()
    })
    it('verify single product is displayed' , function (){
        cy.get('div.input-group.product-search').dblclick()
        cy.wait(1000)           
        cy.get('input.form-control').type('Small Phone')
        cy.get('div h3').should('have.text', 'Small Phone')
        cy.get('div.input-group.product-search').dblclick()            
        cy.get('input.form-control').clear()
        cy.get('div.input-group.product-search').dblclick()
        cy.wait(500)            
        cy.get('input.form-control').type('Camera')
        cy.get('div h3').should('have.text', 'Camera')
        cy.get('div.input-group.product-search').dblclick()           
        cy.get('input.form-control').clear()
    })

    it('verify sub product items invisibilty', function (){
        cy.get('div.input-group.product-search').dblclick()
        cy.wait(1000)            
        cy.get('input.form-control').type('Blue Camera')
        cy.get('div h3').should('not.exist')
        cy.get('div.input-group.product-search').dblclick()            
        cy.get('input.form-control').clear()
        cy.get('div.input-group.product-search').dblclick()
        cy.wait(500)            
        cy.get('input.form-control').type('Nokia Phone')
        cy.get('div h3').should('not.exist')
    })

    it('verify input special characters', function () {
        cy.get('div.input-group.product-search').dblclick()
        cy.wait(1000)           
        cy.get('input.form-control').type("~`!@#$%^&*()-_=+[]}{|\\\"':;/?.>,<")
        cy.get('div h3').should('exist')

    })
})