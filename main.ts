input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . # . . .
        . . . . .
        . . . . .
        `)
})
basic.showString("hi!")
basic.forever(function () {
	
})
