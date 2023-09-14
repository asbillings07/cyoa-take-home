describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('verifies the comments section on the page', () => {
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Comments Feed');
    cy.get('#comment_container').should('be.visible');
    cy.get('#comment_container').get('h2').should('have.text', 'Comments');
    cy.get('#comment_container').find('button').should('be.visible');
    cy.get('#comment_container').find('button').should('have.text', 'Create new comment');

    cy.get('#comment_container').find('.card').should(($cards) => {
      const cards = $cards.map((i, el) => Cypress.$(el))
      cards.map(card => {
        expect(card).to.be.true()
      })
    });
  })

  it('tests comment modal', () => {
    const commentContainer = cy.get('#comment_container');
    commentContainer.get('#create_new_comment_button').should('be.visible');
    commentContainer.get('#create_new_comment_button').click()
    const commentModal = cy.get('#comments_modal')
    commentModal.should('be.visible')
    commentModal.get('#name_label').should('have.text', 'Name:')
    commentModal.get('#comment_label').should('have.text', 'Enter your comment:')
    commentModal.get('input').should('be.visible')
    commentModal.get('textarea').should('be.visible')
    commentModal.get('.modal_close_button').click()
  })

  it('creates a new comment', () => {
    const commentContainer = cy.get('#comment_container');
    commentContainer.get('#create_new_comment_button').should('be.visible');
    commentContainer.get('#create_new_comment_button').click()
    const commentModal = cy.get('#comments_modal')
    commentModal.should('be.visible')
    commentModal.get('input').type('New Name');
    commentModal.get('textarea').type('This is a new comment!');
    commentModal.get('.modal_button').click()
    cy.get('#comment_container').find('.card').then(($cards) => {
      const cardId = $cards.map((i, el) => Cypress.$(el)).length
      commentContainer.get(`#card_${cardId}`).should('be.visible')
    });
  })

})