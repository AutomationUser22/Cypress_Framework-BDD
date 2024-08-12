class apiPage {
    getStartButton(){
        return cy.get('.btn').eq(1)
    }
    getTableData() {
        return cy.get('tr')
    }
}

export default apiPage