input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.up))
})
input.onGesture(Gesture.ScreenUp, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.vol_up))
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
})
input.onGesture(Gesture.ScreenDown, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.vol_down))
})
input.onButtonPressed(Button.AB, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
})
keyboard.startKeyboardService()
keypad.setKeyPad3(
DigitalPin.P3,
DigitalPin.P4,
DigitalPin.P5,
DigitalPin.P6,
DigitalPin.P7,
DigitalPin.P14,
DigitalPin.P15
)
basic.forever(function () {
	
})
