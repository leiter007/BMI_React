describe('BMI Converter', () => {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  beforeEach(function() {
    cy.reload()
  });

  it('should display "BMI Calculator" text on page', () => {
    cy.contains('BMI Calculator');
  });

  describe('Metric method', () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select('metric')
      cy.get('input[name="weight"]').type('95')
      cy.get('input[name="height"]').type('186')
    })

    it('displays assessment', async () => {
      cy.contains('You are Overweight')
    })

    it('displays BMI value', async () => {
      cy.contains('BMI of 27.46')
    })
  })


})