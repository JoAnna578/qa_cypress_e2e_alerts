/// <reference types='cypress' />

describe('Cypress Alerts page', () => {
  before(() => {
    cy.visit('/alerts'); // upewnij się, że to jest poprawny URL do strony z alertami
  });

  it('should have the ability to assert automatically resolved alerts', () => {
    cy.get('#alertButton').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('You clicked a button'); // dopasuj tekst do aplikacji
    });
  });

  it('should have the ability to assert scheduled alert', () => {
    cy.get('#timerAlertButton').click();
    cy.wait(5000); // czekamy na alert
    cy.on('window:alert', (text) => {
      expect(text).to.eq('This alert appeared after 5 seconds'); // dopasuj tekst
    });
  });

  it('should automatically resolve confirm alerts (Ok)', () => {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.eq('Do you confirm action?'); // dopasuj tekst
      return true; // klikamy OK
    });
    cy.get('#confirmResult').should('contain', 'You selected Ok');
  });

  it('should have the ability to Cancel confirm alerts', () => {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.eq('Do you confirm action?'); // dopasuj tekst
      return false; // klikamy Cancel
    });
    cy.get('#confirmResult').should('contain', 'You selected Cancel');
  });

  it('should have the ability to enter text to prompt alert', () => {
    const name = 'JoAnna';
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(name); // wpisujemy tekst do prompt
      cy.get('#promtButton').click();
    });
    cy.get('#promptResult').should('contain', name);
  });
});
