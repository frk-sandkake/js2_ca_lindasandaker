describe('check user input validation for login page', () => {
  it('correct validation messages', () => {
    cy.visit('http://localhost:5173/login.html')
    cy.get("button").click()
    cy.get("[data-input-error-message]").contains( "Remember the email!")
    cy.get("[data-input-error-message]").contains( "Minimum 8 character!")
    cy.get("[data-input-general-message]").contains( "Validation failed..")
    cy.get("#emailLogin").type("jkajhdflkjhflksdf")
    cy.get("#password").type("super")
    cy.get("button").click()
    cy.get("[data-input-error-message]").contains( "Noroff emails only!")
    cy.get("[data-input-error-message]").contains( "Minimum 8 character!")
    cy.get("[data-input-general-message]").contains( "Validation failed..")
    cy.get("#emailLogin").clear().type("linsan80509@stud.noroff.no")
    cy.get("#password").clear().type("8)_helloWorld_(8")
    cy.get("button").click()
    cy.url().should("be.equal", "http://localhost:5173/index.html")
  })

  it('correct validation messages', () => {
    cy.visit('http://localhost:5173/login.html')
    cy.get("button").click()
    cy.get("[data-input-error-message]").contains( "Remember the email!")
    cy.get("[data-input-error-message]").contains( "Minimum 8 character!")
    cy.get("[data-input-general-message]").contains( "Validation failed..")
  })
})

