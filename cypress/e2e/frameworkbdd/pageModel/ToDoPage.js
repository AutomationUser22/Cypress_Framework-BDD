class ToDoPage {
    getToDoList(){
        return cy.get('.todo-list li')
    }

    getToDoTextBox(){
        return cy.get('[data-test=new-todo]')
    }
}

export default ToDoPage