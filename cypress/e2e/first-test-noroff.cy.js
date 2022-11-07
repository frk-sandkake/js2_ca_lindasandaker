describe('heading text', () => {
  it('contains the correct test', () => {
    cy.visit('http://localhost:5173/login.html')
    cy.get("h1")
        .invoke("text")
        .should("equal", "Welcome back fellow Noroff socialites!")
  })
})