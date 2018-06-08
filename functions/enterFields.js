module.exports = (myPage, wanted, changes) => {
    myPage
        .click('@menuBtn')
        .waitForElementVisible(wanted, 5000)
        .click(wanted)
    changes.forEach(change => {
        myPage
            .clearValue(change.field)
            .setValue(change.field, change.value)
    })
}