let temperature = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    temperature = input.temperature()
    basic.showNumber(temperature)
    if (temperature < 22) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
