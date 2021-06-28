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

    /*1) What is better? (Lil Pump) (Pink Floyd)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Damn nice band!')
    cy.get('[data-cy=answer-b]').click()

    /*2) Best Drummer in the world? (Lars Ulrich) (Mike Portnoy)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Agree, Dream Theatre sucks!')
    cy.get('[data-cy=answer-a]').click()

    /*3) Best guitar solo ever? (Lil Wane's) (High Hopes)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Gives chills every time')
    cy.get('[data-cy=answer-b]').click()

    /*4) Sex, Drugs and ... (Rock'n'Roll) (Volleyball)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Correct')
    cy.get('[data-cy=answer-a]').click()

    /*5) Composer that is from Early Romantisizm? (Franz List) (Rachmaninoff)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'For Fuck Sake Man! Maybe John Cage no!?')
    cy.get('[data-cy=answer-b]').click()

    cy.get('[data-cy=show-results-btn]').click()
    cy.get('[data-cy=result-msg]').should('contain.text', 'Congratulations Seva, you scored 4/5 you are not hopeless!')
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

    /*2) What is better? (DOOM) (SIMS)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Gay..')
    cy.get('[data-cy=answer-b]').click()

    /*3) Whats better? (CS 1.6) (CS GO)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Oldschool, my man!')
    cy.get('[data-cy=answer-a]').click()

    /*4) Radio Bandit? (Yes) (No)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Обходи его пацаны!')
    cy.get('[data-cy=answer-b]').click()

    /*5) Violent games are dangerous? (Yes) (No)*/
    cy.get('[data-cy=reaction-msg]').should('contain.text', 'Kill Your Self')
    cy.get('[data-cy=answer-a]').click()

    cy.get('[data-cy=show-results-btn]').click()
    cy.get('[data-cy=result-msg]').should('contain.text', '1/5 you suck man..')
  });
})
