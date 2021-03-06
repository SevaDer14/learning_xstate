describe('user can fill in the wizard', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=start-btn]').click()
  });
  
  it('is expected to congratulatulate user if scores more than 3 in music category', () => {
    /*Hello Boi, whats your name?*/
    cy.get('[data-cy=input]').type('Seva')

    /*Choose Category of questions: (Music) (Gaming)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Alrite, music then.')
    cy.get('[data-cy=answer-a]').click()

    /*1) Best guitar solo ever? (Lil Wane's) (High Hopes)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Gives chills every time')
    cy.get('[data-cy=answer-b]').click()

    /*2) Sex, Drugs and ... (Rock'n'Roll) (Volleyball)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Correct')
    cy.get('[data-cy=answer-a]').click()

    /*3) Composer that is from Early Romantisizm? (Franz List) (Rachmaninoff)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Oh For Fuck Sake Man, you don\'t know THIS?!')
    cy.get('[data-cy=answer-b]').click()

    cy.get('[data-cy=show-results-btn]').click()
    cy.get('[data-cy=result-msg]').should('contain.text', 'Congratulations Seva, you scored 2/3!')
  });

  it('is expected to congratulatulate user if scores more than 3 in music category', () => {
    /*Hello Boi, whats your name?*/
    cy.get('[data-cy=input]').type('Seva')

    /*Choose Category of questions: (Music) (Gaming)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Alrite, gaming then.')
    cy.get('[data-cy=answer-b]').click()

    /*1) Whats your rig? (Xbox) (PC)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'GETAUTAHERE!!')
    cy.get('[data-cy=answer-a]').click()

    /*2) Counter Strike ... (1.6) (GO)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Oldschool, I like it!')
    cy.get('[data-cy=answer-a]').click()

    /*3) Radio Bandit? (Yes) (No)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Вали, вали его!')
    cy.get('[data-cy=answer-b]').click()

    cy.get('[data-cy=show-results-btn]').click()
    cy.get('[data-cy=result-msg]').should('contain.text', '1/3 you suck man..')
  });
})
