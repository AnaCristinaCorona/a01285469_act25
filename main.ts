input.onPinPressed(TouchPin.P0, function () {
    index = 4
    while (index >= 0) {
        led.plot(index, y)
        basic.pause(100)
        index += -1
        y += 1
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        counter += 1
    }
    music.playMelody("C D G F E G E D ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let counter = 0
let y = 0
let index = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
