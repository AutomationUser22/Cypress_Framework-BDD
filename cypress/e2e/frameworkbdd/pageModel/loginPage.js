class LoginPage{
    getFirstCartButton() {
       return cy.get(".fa.fa-shopping-cart").eq(1)
    }
    getMainCartButton(){
        return cy.get(".fa.fa-shopping-cart").eq(0)
    }
}
export default LoginPage