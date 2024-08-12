class ActionsPage {
    getEmailTextBox(){
        return cy.get('.action-email')
    }
    getDisabledTextBox(){
        return cy.get('.action-disabled')
    }
    getFocusElement(){
        return cy.get('.action-focus')
    }
    getBlurElement() {
        return cy.get('.action-blur')
    }
    getClearElement() {
        return cy.get('.action-clear')
    }
    getFormElement() {
        return cy.get('.action-form')
    }
    getCanvasElement() {
        return cy.get('#action-canvas')
    }
    getDoubleClickElement() {
        return cy.get('.action-div')
    }
}

export default ActionsPage