module.exports = (myPage, wanted, changes) => {
    myPage
        .click(wanted)
    changes.forEach(change => {
        myPage
            .clearValue(change.field)
            .setValue(change.field, change.value)
    })
    myPage
        .expect.element('@submitButton').mot.to.have.attribute('disabled')

}