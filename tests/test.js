const enterFields = require('../functions/enterFields')
var cancelPage = {}
var enterPage = {}
var homePage = {}
var modifyPage = {}
module.exports = {
    beforeEach: browser => {
        cancelPage = browser.page.cancelObject()
        enterPage = browser.page.enterObject()
        homePage = browser.page.modifyObject()
        modifyPage = browser.page.modifyObject()
            .navigate()
            
    },
    after: browser => {
        browser.end()
    },
    'UI': browser => {
        //Main page
        homePage
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
        //Enter Wanted page
        homePage
            .click('@menuBtn')
            .api.pause(1000)
            homePage.click('@enterBtn')
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@hdrHeader')
            .expect.element('@hdrInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@mkeHeader')
            .expect.element('@mkeInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@agencyHeader')
            .expect.element('@agencyInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@nameHeader')
            .expect.element('@nameInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@sexHeader')
            .expect.element('@sexInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@raceHeader')
            .expect.element('@raceInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@heightHeader')
            .expect.element('@heightFeetInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .expect.element('@heightInchesInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@weightHeader')
            .expect.element('@weightInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@hairHeader')
            .expect.element('@hairInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@offenceHeader')
            .expect.element('@offenceInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@dowHeader')
            .expect.element('@dowInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@dlHeader')
            .expect.element('@dlInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@dlsHeader')
            .expect.element('@dlsInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@dledHeader')
            .expect.element('@dledInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@lpHeader')
            .expect.element('@lpInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@lsHeader')
            .expect.element('@lsInput').to.have.css('box-shadow', '#6999ff')
            enterPage
            .verify.elementPresent('@ledHeader')
            .expect.element('@ledInput').to.have.css('box-shadow', '#6999ff')
            enterPage
        //Modify Wanted page
        enterPage
            .click('@menuBtn')
            .api.pause(1000)
            enterPage.click('@modifyBtn')
        modifyPage
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@warrantIdHeader')
            .expect.element('@warrantIdInput').to.have.css('box-shadow', '#6999ff')
            modifyPage
            .verify.elementPresent('@hdrHeader')
            .verify.elementPresent('@hdrInput')
            .verify.elementPresent('@mkeHeader')
            .verify.elementPresent('@mkeInput')
            .verify.elementPresent('@agencyHeader')
            .verify.elementPresent('@agencyInput')
            .verify.elementPresent('@nameHeader')
            .verify.elementPresent('@nameInput')
            .verify.elementPresent('@sexHeader')
            .verify.elementPresent('@sexInput')
            .verify.elementPresent('@raceHeader')
            .verify.elementPresent('@raceInput')
            .verify.elementPresent('@heightHeader')
            .verify.elementPresent('@heightFeetInput')
            .verify.elementPresent('@heightInchesInput')
            .verify.elementPresent('@weightHeader')
            .verify.elementPresent('@weightInput')
            .verify.elementPresent('@hairHeader')
            .verify.elementPresent('@hairInput')
            .verify.elementPresent('@offenceHeader')
            .verify.elementPresent('@offenceInput')
            .verify.elementPresent('@dowHeader')
            .verify.elementPresent('@dowInput')
            .verify.elementPresent('@dlHeader')
            .verify.elementPresent('@dlInput')
            .verify.elementPresent('@dlsHeader')
            .verify.elementPresent('@dlsInput')
            .verify.elementPresent('@dledHeader')
            .verify.elementPresent('@dledInput')
            .verify.elementPresent('@lpHeader')
            .verify.elementPresent('@lpInput')
            .verify.elementPresent('@lsHeader')
            .verify.elementPresent('@lsInput')
            .verify.elementPresent('@ledHeader')
            .verify.elementPresent('@ledInput')
        //Cancel Wanted page
        modifyPage
            .click('@menuBtn')
            .api.pause(1000)
            modifyPage.click('@cancelBtn')
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@warrantIdHeader')
            .expect.element('@warrantIdInput').to.have.css('box-shadow', '#6999ff')
            cancelPage
            .verify.elementPresent('@reasonHeader')
            .expect.element('@reasonInput').to.have.css('box-shadow', '#6999ff')
            cancelPage
            .verify.elementPresent('@dateHeader')
            .expect.element('@dateCancel').to.have.css('box-shadow', '#6999ff')
            cancelPage
    },
    'Enter Wanted Require 1': browser =>{
        homePage
        .click('@menuBtn')
        api.pause(1000)
        homepage
        .click('@enterBtn')
        enterFields(enterObject, '')
    },

}