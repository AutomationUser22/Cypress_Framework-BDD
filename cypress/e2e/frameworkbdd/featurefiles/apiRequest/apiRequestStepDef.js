import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import testconfig from "../../config/testconfig";
import apiPage from "../../pageModel/apiPage";

const testConfigObj = new testconfig()
const apiPageObj = new apiPage()

Given('User made the API request', function () {
    cy.visit(testConfigObj.API_START_URL)

    cy.intercept({
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, {
        statusCode: 200,
        body: [{
            "book_name": "1",
            "isbn": "ESU",
            "aisle": "2301"
        }]
        }
    ).as('resultRetriever')

    apiPageObj.getStartButton().click()
    cy.wait('@resultRetriever').then(({request, response}) => {
        apiPageObj.getTableData().should('have.length', response.body.length + 1)
    })
    cy.visit(testConfigObj.API_START_URL)
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) =>
    {
     req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
     req.continue((res) => {
         expect(res.statusCode).equal(200)
     })
    }).as('invalidURL')
    apiPageObj.getStartButton().click()
    cy.wait('@invalidURL')
})