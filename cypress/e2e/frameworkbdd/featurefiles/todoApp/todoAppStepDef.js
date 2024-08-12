import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import ToDoPage from "../../pageModel/ToDoPage";
import TestConfig from "../../config/testconfig";

const newItem = 'Feed the cat'
const todoPage = new ToDoPage()
const testConfig = new TestConfig()

Given('To-do app is open', function (){
    cy.visit(testConfig.TODO_APP_URL)
})

Then('By default two default items present', function (){
    todoPage.getToDoList().should('have.length', 2)
})

Then("First item text should be 'Pay electric bill'",function (){
    todoPage.getToDoList().first().should('have.text', 'Pay electric bill')
})

Then("Second item text should be 'Walk the dog'", function (){
    todoPage.getToDoList().last().should('have.text', 'Walk the dog')
})

When("User enter new todo item as 'Feed the cat'", function (){
    todoPage.getToDoTextBox().type(`${newItem}{enter}`)
})

Then("Todo List should be updated with 'Feed the cat'", function (){
    todoPage.getToDoList()
        .should('have.length', 3)
        .last()
        .should('have.text', newItem)
})

When("User check 'Pay electric bill'",function (){
    cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
})

Then("'Pay electric bill' todo should be completed",function (){
    cy.contains('Pay electric bill')
        .parents('li')
        .should('have.class', 'completed')
})

Given('To-do app is open is one checked Task', function (){
    cy.visit(testConfig.TODO_APP_URL)
    cy.contains('Pay electric bill')
            .parent()
            .find('input[type=checkbox]')
            .check()
})

When('User clicks on active button', function (){
    cy.contains('Active').click()
})

Then('Todo List should display only uncompleted tasks', function (){
    todoPage.getToDoList()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')
    cy.contains('Pay electric bill').should('not.exist')
})

When('User clicks on completed button',function (){
    cy.contains('Completed').click()
})

Then('Todo List should display only completed tasks', function (){
    todoPage.getToDoList()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')
    cy.contains('Walk the dog').should('not.exist')
})

When('User click on clear completed',function (){
    cy.contains('Clear completed').click()
})

Then('All completed tasks should clear from todo list',function (){
    todoPage.getToDoList()
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')
    cy.contains('Clear completed').should('not.exist')
})