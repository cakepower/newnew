input.onGesture(Gesture.TiltRight, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.vol_up))
})
input.onPinPressed(TouchPin.P0, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.vol_down))
})
input.onGesture(Gesture.ScreenUp, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.escape))
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.delete))
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
keyboard.startKeyboardService()
