let distance = 0
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Inches
    ))
    distance = 24
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.clearScreen()
    basic.pause(100)
})
