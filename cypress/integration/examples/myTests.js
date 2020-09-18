describe('Pizza app', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:3000/order')
    })

    const textInput = () => cy.get('input[name=name]') //Shortcut for
    const specialInput = () => cy.get('input[name=special]') //Shortcut for
    const cheeseInput = () => cy.get(`input[name="cheese"]`)
    const peppersInput = () => cy.get(`input[name="peppers"]`)
    const pineappleInput = () => cy.get(`input[name="pineapple"]`)
    const mushroomsInput = () => cy.get(`input[name="mushrooms"]`)
    const sizeInput = () => cy.get ('select[name=size]')
    const submitBtn = () => cy.get(`button[id="submitBtn"]`)
   


    it('This test is going to be for a name text box & special text box', () =>{
        textInput()
        .type('Pablo') //Type is invoked to manually change the value of the text to ("whatever u want")
        .should('have.value', "Pablo") //Should checks to make sure it == the value    
        specialInput()
        .type('Bring it fast') //Type is invoked to manually change the value of the text to ("whatever u want")
        .should('have.value', "Bring it fast") //Should checks to make sure it == the value 
    })

  
    it('Check Cheese', () =>{
        cheeseInput()
        .should('exist')
        .should('have.value','false')
        .check()
        .should('have.value','true')
    })  
    it('Check Peppers', () =>{
        peppersInput()
        .should('exist')
        .should('have.value','false')
        .check()
        .should('have.value','true')
    })   
    it('Check Pineapple', () =>{
        pineappleInput()
        .should('exist')
        .should('have.value','false')
        .check()
        .should('have.value','true')
    })  
    it('Check Mushrooms', () =>{
        mushroomsInput()
        .should('exist')
        .should('have.value','false')
        .check()
        .should('have.value','true')
    }) 

    it('Fill in and submit', () =>{
        textInput()
        .type('Pablo') //Type is invoked to manually change the value of the text to ("whatever u want")
        .should('have.value', "Pablo") //Should checks to make sure it == the value    
       
        specialInput()
        .type('Bring it fast') //Type is invoked to manually change the value of the text to ("whatever u want")
        .should('have.value', "Bring it fast")

        mushroomsInput()
        .should('exist')
        .should('have.value','false')
        .type('true')

        sizeInput()
        .should('exist')
        .type("small")
    })


})