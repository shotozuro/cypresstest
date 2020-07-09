describe('Responsivity Test', () => {
  beforeEach(() => {
    cy.visit('/explore');
  });
  it('should hide sidebar column on mobile', () => {
    cy.get('div[data-testid=sidebarColumn]');
  });
});
