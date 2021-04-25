describe("Functional tests", ()=>{
    beforeEach(() =>{
        cy.visit("/")
    })
    it("TC01_addItem_lessThan10Characters_minimumLengthErrorDisplayed", ()=>{
        cy.get('#title').type('TestLTTen')
        cy.get('.Form__add').click()
        cy.get('.Form__error').should('have.text', 'Title must be at least 10 characters.')
    });
    it("TC02_addItem_moreThan20Characters_MaximumLengthErrorDisplayed", ()=>{
        cy.get('#title').type('TestMoreThanTwentyCharacters')
        cy.get('.Form__add').click()
        cy.get('.Form__error').should('have.text', 'Title can be at most 20 characters.')
    });
    it("TC03_addItem_exactly10Characters_itemAdded", ()=>{
        cy.get('#title').type('TestEq=Ten')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','TestEq=Ten')
    });
    it("TC04_addItem_exactly20Characters_itemAdded", ()=>{
        cy.get('#title').type('EqualTwentyCharacter')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','EqualTwentyCharacter')
    });
    it("TC05_addItem_withSpecialCharactersWithinLengthLimit_itemAdded", ()=>{
        cy.get('#title').type('#!$!@%^!&*(@#!')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','#!$!@%^!&*(@#!')
    });
    it("TC06_addItem_withAlphaNumericCharactersWithinLengthLimit_itemAdded", ()=>{
        cy.get('#title').type('Abcdefg1234567')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','Abcdefg1234567')
    });
    it("TC07_addItem_withNumericCharactersWithinLengthLimit_itemAdded", ()=>{
        cy.get('#title').type('01234567890')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','01234567890')
    });
    it("TC08_addItem_withLeadingSpacesWithinLengthLimit_itemAdded", ()=>{
        cy.get('#title').type('      01234567890')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','      01234567890')
    });
    it("TC09_addItem_withTrailingSpacesWithinLengthLimit_itemAdded", ()=>{
        cy.get('#title').type('01234567890     ')
        cy.get('.Form__add').click()
        cy.get('#item_6').find('.Item__title')
                         .should('be.visible')
                         .and('have.text','01234567890     ')
    });
    it("TC10_chooseAnItem_removeItem_itemRemoved", ()=>{
        cy.get('#item_5').find('.Item__remove').click()
        cy.get('#item_5').should('not.exist')
    });


});