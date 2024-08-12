import testconfig from "../../config/testconfig";
import sampleDownloadPage from "../../pageModel/sampleDownloadPage";

const testConfigObj = new testconfig()
const sampleDownloadPageObj = new sampleDownloadPage()
Given('User visited the sample file website',()=> {
    cy.visit(testConfigObj.SAMPLE_DOWNLOAD_PAGE)
})

When('User clicked the download button', ()=> {
    sampleDownloadPageObj.getDownloadButton().click()
    cy.wait(4000)
})