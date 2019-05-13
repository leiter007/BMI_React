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

  describe('Metric method', async () => {
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

    it('displays kilos and centimetres', async () => {
      cy.contains('(cm)')
      cy.contains('(kg)')
    })
  })

  describe('Imperial method', async () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select('imperial')
      cy.get('input[name="weight"]').type('200')
      cy.get('input[name="height"]').type('73')
    })

    it('displays assessment', async () => {
      cy.contains('You are Overweight')
    })

    it('displays BMI value', async () => {
      cy.contains('BMI of 26.38')
    })

    it('displays pounds and inches ', async () => {
      cy.contains('(in)')
      cy.contains('(lb)')
    })
  })
  
})