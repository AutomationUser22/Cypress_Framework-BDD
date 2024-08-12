import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import ActionsPage from "../../pageModel/actionsPage";
import TestConfig from "../../config/testconfig";

const actionPage = new ActionsPage()
const testConfig = new TestConfig()

Given('Cypress Action Page is open',function (){
    cy.visit(testConfig.ACTION_PAGE_URL)
})

When('User enter normal email id',function (){
    actionPage.getEmailTextBox().type('fake@email.com')
})

Then('Email {string} should be typed in Text Box',function (Email, next){
    actionPage.getEmailTextBox().should('have.value', Email)
})

When('User enter special characters',function (){
    actionPage.getEmailTextBox().type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    actionPage.getEmailTextBox().type('{del}{selectall}{backspace}')
    actionPage.getEmailTextBox().type('{alt}{option}') //these are equivalent
    actionPage.getEmailTextBox().type('{ctrl}{control}') //these are equivalent
    actionPage.getEmailTextBox().type('{meta}{command}{cmd}') //these are equivalent
    actionPage.getEmailTextBox().type('{shift}')
})

When('User enter email with delay',function (){
    actionPage.getEmailTextBox().type('slow.typing@email.com', { delay: 100 })
})

When('User enter in disabled TextBox',function (){
    actionPage.getDisabledTextBox().type('disabled error checking', { force: true })
})

Then('User gets an error for disableBox', function (){
    actionPage.getDisabledTextBox().should('have.value', 'disabled error checking')
})

When('User Focus on an element',function (){
    actionPage.getFocusElement().focus()
})

Then('Element should have color orange', function (){
    actionPage.getFocusElement().should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
})

When('System blur the Text',function (){
    actionPage.getBlurElement().type('About to blur')
    actionPage.getBlurElement().blur()
})

Then('Element text should be blur',function (){
    actionPage.getBlurElement().should('have.class', 'error')
        .prev().should('have.attr', 'style', 'color: red;')
})

When('User enter any text', function (){
    actionPage.getClearElement().type('Clear this text')
})

Then('Text should be present in that textBox',function (){
    actionPage.getClearElement().should('have.value', 'Clear this text')
})

When('User click on clear Button', function (){
    actionPage.getClearElement().clear()
})

Then('TextBox should be cleared', function (){
    actionPage.getClearElement().should('have.value', '')
})

When('User type in form and submit',function () {
    actionPage.getFormElement().find('[type="text"]').type('HALFOFF').submit()
})

Then('Success message should be displayed', function () {
    actionPage.getFormElement().next().should('contain', 'Your form has been submitted!')
})

When('User clicks on all possible combination of element', function () {
    actionPage.getCanvasElement().click()
    actionPage.getCanvasElement().click('topLeft')
    actionPage.getCanvasElement().click('top')
    actionPage.getCanvasElement().click('topRight')
    actionPage.getCanvasElement().click('left')
    actionPage.getCanvasElement().click('right')
    actionPage.getCanvasElement().click('bottomLeft')
    actionPage.getCanvasElement().click('bottom')
    actionPage.getCanvasElement().click('bottomRight')
    actionPage.getCanvasElement().click(80, 75)
    actionPage.getCanvasElement().click(170, 75)
    actionPage.getCanvasElement().click(80, 165)
    actionPage.getCanvasElement().click(100, 185)
    actionPage.getCanvasElement().click(125, 190)
    actionPage.getCanvasElement().click(150, 185)
    actionPage.getCanvasElement().click(170, 165)
})

When('User Double clicks', function () {
    actionPage.getDoubleClickElement().dblclick()
})