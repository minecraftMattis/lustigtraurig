input.onButtonPressed(Button.B, function () {
    if (istTraurig == true) {
        istTraurig = false
        basic.showIcon(IconNames.Happy)
    } else if (istTraurig == false) {
        istTraurig = true
        basic.showIcon(IconNames.Sad)
    }
})
let istTraurig = false
istTraurig = true
basic.showIcon(IconNames.Sad)
