const enterFields = require('../functions/enterFields')
var page = {}
module.exports = {
    beforeEach: browser => {
        page = browser.page.pageObjects()
        page
            .navigate()
            
    },
    after: browser => {
        browser.end()
    },
    'UI': browser => {
        //Main page
        page
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
        //Enter Wanted page
        page
            .click('@menuBtn')
            .api.pause(1000)
            page.click('@enterBtn')
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@hdrHeader')
            .expect.element('@hdrInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@mkeHeader')
            .expect.elementPresent('@mkeInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@agencyHeader')
            .expect.elementPresent('@agencyInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@nameHeader')
            .expect.elementPresent('@nameInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@sexHeader')
            .expect.elementPresent('@sexInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@raceHeader')
            .expect.elementPresent('@raceInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@heightHeader')
            .verify.elementPresent('@heightFeetInput').to.have.css('box-shadow', '#6999ff')
            page
            .expect.elementPresent('@heightInchesInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@weightHeader')
            .expect.elementPresent('@weightInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@hairHeader')
            .expect.elementPresent('@hairInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@offenceHeader')
            .expect.elementPresent('@offenceInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@dowHeader')
            .expect.elementPresent('@dowInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@dlHeader')
            .expect.elementPresent('@dlInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@dlsHeader')
            .expect.elementPresent('@dlsInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@dledHeader')
            .expect.elementPresent('@dledInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@lpHeader')
            .expect.elementPresent('@lpInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@lsHeader')
            .expect.elementPresent('@lsInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@ledHeader')
            .expect.elementPresent('@ledInput').to.have.css('box-shadow', '#6999ff')
            page
        //Modify Wanted page
        page
            .click('@menuBtn')
            .api.pause(1000)
            page.click('@modifyBtn')
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@warrantIdHeader')
            .expect.elementPresent('@warrantIdInput').to.have.css('box-shadow', '#6999ff')
            page
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
        page
            .click('@menuBtn')
            .api.pause(1000)
            page.click('@cancelBtn')
            .verify.containsText('@titleBar', 'Wanted Queries')
            .verify.containsText('@version', 'Version 1.2')
            .verify.elementPresent('@menuBtn')
            .verify.elementPresent('@submitButton')
            .verify.elementPresent('@clearButton')
            .verify.elementPresent('@warrantIdHeader')
            .expect.elementPresent('@warrantIdInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@reasonHeader')
            .expect.elementPresent('@reasonInput').to.have.css('box-shadow', '#6999ff')
            page
            .verify.elementPresent('@cancelHeader')
            .expect.elementPresent('@cancelDate').to.have.css('box-shadow', '#6999ff')
            page
    },

}