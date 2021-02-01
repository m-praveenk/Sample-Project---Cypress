describe('sorting', function(){
    beforeEach(() => {
        cy.visit('https://vuejs.mikesprague.me/shopping-cart/')
    })
    afterEach(() => {
      cy.screenshot()
    })
	it('verify sort name in Descending order' , function (){
		cy.get('div.input-group-btn button.btn.btn-default').should('be.visible')
		cy.wait(1000)
		cy.get('div.input-group-btn button.btn.btn-default i')
		cy.pause()
		cy.get('[class=row] .col-sm-12')
			.should('have.length', 4) 
		cy.get("div h3").then($divElements => {
			const namesDefault = Array.from($divElements, divElement => divElement.innerText);
			assert.equal(JSON.stringify(namesDefault) === JSON.stringify(namesDefault.sort((a, b) => (a > b ? -1 : 1))), true)
		})
	})
	
	it('verify sort name in Ascending order' , function (){
		cy.get('div.input-group-btn button.btn.btn-default').should('be.visible')
		cy.wait(1000)
		cy.get('div.input-group-btn button.btn.btn-default').click()
		cy.get("div h3").then($divElements => {
			const namesSorted = Array.from($divElements, divElement => divElement.innerText);
			// cy.log(JSON.stringify(namesSorted))
			// cy.log(JSON.stringify(namesSorted.sort()))
			assert.equal(JSON.stringify(namesSorted) === JSON.stringify(namesSorted.sort()), true)
		})
	})
})