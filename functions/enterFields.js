module.exports = (myPage, wanted, changes) => {
    myPage
        .click('@menuBtn')
        .click(wanted)
    changes.forEach(change => {
        myPage
            .clearValue(change.field)
            .setValue(change.field, change.value)
    })
}