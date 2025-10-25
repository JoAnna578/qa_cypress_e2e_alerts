class AlertsPage {
  url = '/alerts';

  visit() {
    cy.visit(this.url);
  }

  // Buttons
  get alertButton() {
    return cy.get('#alertButton');
  }

  get timerAlertButton() {
    return cy.get('#timerAlertButton');
  }

  get confirmButton() {
    return cy.get('#confirmButton');
  }

  get promptButton() {
    return cy.get('#promtButton');
  }

  // Actions
  clickAlertButton() {
    this.alertButton.click();
  }

  clickTimerAlertButton() {
    this.timerAlertButton.click();
  }

  clickConfirmButton() {
    this.confirmButton.click();
  }

  clickPromptButton() {
    this.promptButton.click();
  }
}

export default AlertsPage;
