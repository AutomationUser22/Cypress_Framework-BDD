// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import testconfig from "../e2e/frameworkbdd/config/testconfig";

const testConfigObj = new testconfig()
Cypress.Commands.add('getElement', (SelectorValue) => {
    return cy.get(`[data-test="${SelectorValue}"]`)
})
Cypress.Commands.add('addItem', (name) => {
    cy.get('h4.card-title').each(($e1,index) => {
        if($e1.text().includes(name)){
            cy.wrap($e1).get('.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add("login",()=>{
    cy.request('POST', testConfigObj.LOGIN_HOMEPAGE_URL, testConfigObj.LOGIN_PAYLOAD).then(function (response){
        expect(response.status).equal(200)
    })
})