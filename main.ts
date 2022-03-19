input.onPinPressed(TouchPin.P0, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
})
input.onPinPressed(TouchPin.P2, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.up))
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
})
input.onPinPressed(TouchPin.P1, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
})
keyboard.startKeyboardService()
basic.forever(function () {
	
})
