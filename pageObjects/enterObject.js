module.exports = { 
    url: 'https://devmountain-qa.github.io/wanted-queries/build/index.html#/',
    elements: {
        titleBar: '.titleBar',
        version: 'h6[name="version"]',
        menuBtn: 'button[style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; border: none; opacity: 0; font-size: 8px; cursor: pointer;"]',
        homeBtn: 'p[name="homeOption"]',
        enterBtn: 'p[name="enterOption"]',
        modifyBtn: 'p[name="modifyOption"]',
        cancelBtn: 'p[name="cancelOption"]',
        submitButton: 'button[id="saveBtn"]',
        clearButton: 'button[id="clearBtn"]',
        hdrInput: 'input[name="hdrInput"]',
        hdrHeader: 'span[name="hdrHeader"]', 
        mkeInput: 'input[name="mkeInput"]',
        mkeHeader: 'span[name="mkeHeader"]',
        agencyInput: 'input[name="oriInput"]',
        agencyHeader: 'span[name="oriHeader"]',
        nameInput: 'input[name="namInput"]',
        nameHeader: 'span[name="namHeader',
        sexInput: 'select[name="sexInput"]',
        sexHeader: 'span[name="sexHeader"]',
        raceInput: 'select[name="racInput"]',
        raceHeader: 'span[name="racHeader"]', 
        heightFeetInput: 'input[name="hgtInputFeet"]',
        heightInchesInput: 'input[name="hgtInputInches"]',
        heightHeader: 'span[name="hgtHeader"]',
        weightInput: 'input[name="wgtInput"]',
        weightHeader: 'span[name="wgtHeader"]',
        hairInput: 'input[name="haiInput"]',
        hairHeader: 'span[name="haiHeader"]',
        offenceInput: 'input[name="offInput"]',
        offenceHeader: 'span[name="offHeader"]',
        dowInput: 'input[name="dowInput"]',
        dowHeader: 'span[name="dowHeader"]',
        dlInput: 'input[name="olnInput"]',
        dlHeader: 'span[name="olnHeader"]',
        dlsInput: 'input[name="olsInput"]',
        dlsHeader: 'span[name="olsHeader"]',
        dledInput: 'input[name="oldInput"]',
        dledHeader: 'span[name="oldHeader"]',
        lpInput: 'input[name="licInput"]',
        lpHeader: 'span[name="licHeader"]',
        lsInput: 'input[name="lisInput"]',
        lsHeader: 'span[name="lisHeader"]',
        ledInput: 'input[name="lidInput"]',
        ledHeader: 'span[name="lidHeader"]',
        validHeader: 'h4[id="validHeader"]',
        queryTitle: 'span[name="queryTitle"]',
        queryBody: 'span[name="queryBody"]',
        errorList: '#errorList',
        hdrLthError: {
            selector: '//li[text()=\'The "Header" field should be between 9and 19 characters long.\']',
            locateStrategy: 'xpath'  
        },
        mkeLthError: {
            selector: '//li[text()=\'The "MKE" field should be between 2 and 4 characters long.\']',
            locateStrategy: 'xpath'
        },
        agencyLthError: {
            selector: '//li[text()=\'The "Originatiing Agency Identifier" field should be 9 characters long.\']',
            locateStrategy: 'xpath'
        },
        nameLthError: {
            selector: '//li[text()=\'The "Name" field should be between 3 and 30 characters long.\']',
            locateStrategy: 'xpath'
        },
        weightLthError: {
            selector: '//li[text()=\'The "Weight" field should be between 1 and 3 characters long.\']',
            locateStrategy: 'xpath'
        },
        hairLthError: {
            selector: '//li[text()=\'The "Hair" field should be between 3 and 10 characters long.\']',
            locateStrategy: 'xpath'
        },
        offLthError: {
            selector: '//li[text()=\'The "Offence" field should be between 5 and 15 characters long.\']',
            locateStrategy: 'xpath'
        },
        dlLthError: {
            selector: '//li[text()=\'The "Drivers License" field should be between 1 and 20 characters long.\']',
            locateStrategy: 'xpath'
        },
        dlsLthError: {
            selector: '//li[text()=\'The "DL State" field should be 2 characters long.\']',
            locateStrategy: 'xpath'
        },
        lpLthError: {
            selector: '//li[text()=\'The "License Plate" field should be between 5 and 8 chararters long.\']',
            locateStrategy: 'xpath'
        },
        lpsLthError: {
            selector: '//li[text()=\'The "License State" field should be 2 characters long.\']',
            locateStrategy: 'xpath'
        }
    }
}