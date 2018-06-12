const enterFields = require('../functions/enterFields')
const data = require('../data/data')
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
    },// Verify the elements of the UI are present and required fields highlighted in blue
    'Enter Wanted Require 1': browser =>{
        enterFields(enterPage, '@enterBtn', data.req)
        enterPage
        .api.pause(1000)
        enterPage.click('@submitButton')
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        enterPage
        .expect.element('@queryBody').text.to.contain('ABC-114933.ABC.897654822.John Doe.M.A.611.180.Blonde.Arson.2018-06-07......')
    },// test required fields with valid data
    'Enter Wanted Optional 1': browser =>{
        enterFields(enterPage, '@enterBtn', data.opt)
        enterPage
        .click('@submitButton')
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        enterPage
        .expect.element('@queryBody').text.to.contain('ABC-114933.ABC.897654822.John Doe.M.A.611.180.Blonde.Arson.2018-06-07.a264756.CA.2019-06-11.93HG123.CA.2020-07-25')
    },// Test optional entry fields with valid data
    'Modify Wanted Header': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@hdrInput', value: 'TBS-332897'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278.TBS-332987...............')
    },// Test modify fields with valid Header data
    'Modify Wanted MKE': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@mkeInput', value: 'TBS'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278..TBS..............')
    },// Test modify fields with valid MKE data
    'Modify Wanted Originating Agnency': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@agencyInput', value: '123456789'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278...123456789.............')
    },// Test modify fields with valid Originating Agency Identifier data
    'Modify Wanted Name': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@nameInput', value: 'Benedict Cumberbatch'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278....Benedict Cumberbatch............')
    },// Test modify fields with valid Name data
    'Modify Wanted Sex': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@sexInput', value: 'F'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278.....F...........')
    },// Test modify fields with valid MKE data
    'Modify Wanted Race': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@raceInput', value: 'H'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278......H..........')
    },// Test modify fields with valid Race data
    'Modify Wanted Height': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@hgtFeetInput', value: '4'},{field: '@hgtInchesInput', value: '9'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278.......409.........')
    },// Test modify fields with valid Height data
    'Modify Wanted weight': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@wgtInput', value: '97'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278........097........')
    },// Test modify fields with valid Weight data
    'Modify Wanted Hair': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@hairInput', value: 'Bald'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278.........Bald.......')
    },// Test modify fields with valid Hair data
    'Modify Wanted Offence': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@offenceInput', value: 'Manslaught'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278...........Manslaught.....')
    },// Test modify fields with valid Offence data
    'Modify Wanted Offence Date': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@dowInput', value: '12152010'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278............2010-12-15....')
    },// Test modify fields with valid Offence Date data
    'Modify Wanted Drivers License': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@dlInput', value: 'B987654'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278.............B987654...')
    },// Test modify fields with valid Drivers License data
    'Modify Wanted Dl State': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@dlsInput', value: 'FL'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278..............FL..')
    },// Test modify fields with valid DL STate data
    'Modify Wanted DL Expiration Date': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@dledInput', value: '11252020'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278...............2020-11-25.')
    },// Test modify fields with valid Dl Expiration Date data
    'Modify Wanted License Plate': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@lpInput', value: '77MS456'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278................77MS456')
    },// Test modify fields with valid License Plate data
    'Modify Wanted LP State': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@lsInput', value: 'FL'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278................FL')
    },// Test modify fields with valid LP State data
    'Modify Wanted LP Expiration Date': browser =>{
        enterFields(modifyPage, '@modifyBtn', [{field: '@warrantIdInput', value: '1938663278'},{field: '@ledInput', value: '10312018'}])
        modifyPage
        .click('@submitButton')
        .expect.element('@validHeader').text.to.contain('Valid')
        modifyPage
        .expect.element('@queryTitle').text.to.contain('Assembled Query:')
        modifyPage
        .expect.element('@queryBody').text.to.contain('1938663278................2018-10-31')
    },// Test modify fields with valid LP Expiration Date data
    'Cancel Wanted 1': browser =>{
        enterFields(cancelPage, '@cancelBtn', [{field: '@warrantIdInput', value: '1938663278'}, {field: '@reasonInput', value: 'Alabi was confirmed'}, {field: '@dateCancel', value: '06122018'}])
        cancelPage
        .click('@submitButton')
        cancelPage
        .expect.element('@validHeader').text.to.contain('Valid')
        cancelPage
        .expect.element('@queryTitle').text.to.contain('Assembled')
    },// Test cancel page with valid data
   
}