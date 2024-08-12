import testconfig from "../../config/testconfig";
import loginPage from "../../pageModel/loginPage";

const testConfigObj = new testconfig()
const loginPageObj = new loginPage()
Given('User is on Login Website', function (){
    cy.login().then(function () {
        cy.visit(testConfigObj.LOGIN_HOMEPAGE_URL, {
            onBeforeLoad:function (win) {
                if(Cypress.env('token') === null){
                    cy.log("This is shit")
                }
                win.localStorage.setItem('token',Cypress.env('token'))
            }
        })
    })
})