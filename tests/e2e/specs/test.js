// https://docs.cypress.io/api/introduction/api.html

describe('My Notes Test', () => {
  beforeEach(() => cy.visit('/'));

  describe('My Notes URL', () => {
    it('Should display message if there are no data in the localStorage', () => {
      cy.contains('.btn', 'Add Note');
      cy.contains('p', `You haven't created any notes yet...`);
    });
  });

  describe('Clicks on the "Add Note" button', () => {
    it('Should add a new note', () => {
      cy.contains('.btn', 'Add Note').click();
      cy.get('.note-list').find('.note-list-item').should('have.length', 1);
    });
  });

  describe('Edit note', () => {
    beforeEach(() => cy.contains('.btn', 'Add Note').click());

    it('Should update note', () => {
      cy.contains('.btn-icon', 'edit').click();
      cy.get('input[type=color]').then((input) => input.val('#000000'));
      cy.get('.note-list-item-editor').clear().type('Testing');
      cy.contains('.btn-icon', 'save').click();
      cy.contains('.note-list-item-label', 'Testing');
      cy.get('.note-list-item').should('have.attr', 'style', 'background: rgb(255, 255, 255); color: rgb(0, 0, 0);');
    });
  });
});
