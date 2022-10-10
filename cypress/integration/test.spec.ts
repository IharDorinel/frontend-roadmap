/// <reference types="cypress" />

describe("test", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("renders correctly", () => {
        cy.get("#app").should("exist")
    });

    it("locating elements with get", () => {
        cy.get("form");
        cy.get("div")
    })

    it('Interacting with checkboxes', () => {
        cy.get("[id='formik'] [type='checkbox']").check();

        cy.get("[id='formik'] [type='checkbox']")
            .check(['Java', 'JavaScript', 'Python', 'Ruby', 'Pascal']);

        cy.get("[id='formik'] [type='checkbox']").uncheck();

        cy.get("[id='formik'] [type='checkbox']")
            .check()
            .should('be.checked')
            .and('have.value', 'Java');

        cy.get("[id='formik'] [type='checkbox']")
            .uncheck()
            .should('not.be.checked')
    })

    it('Interacting with radio buttons', () => {
        cy.get("[id='formik'] [type='checkbox']").check('Java')

        cy.get("[id='inputBtn']").click();

        cy.get('[type="radio"]').first()
            .check()
            .should('be.checked');

        cy.get('[type="radio"]').check('Dakar');

        cy.get('[type="radio"]').not('[disabled]')
            .check().should('be.checked');

        cy.contains("Submit").should("be.visible").click()
    })
})