describe('Login Tests', () => {
  
  const correctUsername = 'testuser';
  const correctPassword = 'password';

  beforeEach(() => {
    
    cy.visit('http://localhost:3000/login'); 
  });

  it('should show error for empty username and password', () => {
    cy.get('button').click();
    cy.contains('Login failed');
  });

  it('should show error for incorrect username', () => {
    cy.get('[data-cy="cy-user"]').type('wronguser');
    cy.get('[data-cy="cy-password"]').type(correctPassword);
    cy.get('button').click();
    cy.contains('Login failed');
  });

  it('should show error for incorrect password', () => {
    cy.get('[data-cy="cy-user"]').type(correctUsername);
    cy.get('[data-cy="cy-password"]').type('wrongpassword');
    cy.get('button').click();
    cy.contains('Login failed');
  });

  it('should show error for empty username and filled password', () => {
    cy.get('[data-cy="cy-password"]').type(correctPassword);
    cy.get('button').click();
    cy.contains('Login failed');
  });

  it('should show error for filled username and empty password', () => {
    cy.get('[data-cy="cy-user"]').type(correctUsername);
    cy.get('button').click();
    cy.contains('Login failed');
  });

  it('should login successfully with correct username and password', () => {
    cy.get('[data-cy="cy-user"]').type(correctUsername);
    cy.get('[data-cy="cy-password"]').type(correctPassword);
    cy.get('button').click();
    cy.contains('sampletoken');
  });
});
