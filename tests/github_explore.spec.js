describe('Search repo feature in github', () => {
  beforeEach(() => {
    cy.visit('/search');
  });
  it('could show empty search form', () => {
    cy.get('input[name="q"]').should('be.visible').should('be.empty');
  });

  it('could show search button', () => {
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('could search certain keyword', () => {
    cy.get('input[name="q"]')
      .type('covid19{enter}')
      .should('have.value', 'covid19');

    cy.url().should('include', '/search?q=covid19');
  });
});
