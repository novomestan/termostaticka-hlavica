input.onButtonPressed(Button.A, function () {
    Ziadana = Ziadana + 0.5
})
input.onButtonPressed(Button.B, function () {
    Ziadana = Ziadana - 0.5
})
let Ziadana = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
wuKong.setServoAngel(wuKong.ServoList.S0, 0)
basic.pause(1000)
wuKong.setServoAngel(wuKong.ServoList.S0, 90)
let Merana = 0
Ziadana = 25
basic.forever(function () {
	
})
