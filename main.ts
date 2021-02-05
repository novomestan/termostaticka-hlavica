input.onButtonPressed(Button.A, function () {
    Ziadana = Ziadana + 0.1
})
input.onButtonPressed(Button.B, function () {
    Ziadana = Ziadana - 0.1
})
let Merana = 0
let Ziadana = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
wuKong.setServoAngel(wuKong.ServoList.S1, 0)
basic.pause(500)
let Servo = 180 / 1.5
wuKong.setServoAngel(wuKong.ServoList.S1, Servo)
Ziadana = 25
I2C_LCD1602.ShowString("Merana  T:", 0, 0)
I2C_LCD1602.ShowString("Ziadana T:", 0, 1)
basic.forever(function () {
    Merana = input.temperature()
    I2C_LCD1602.ShowNumber(Merana, 11, 0)
    I2C_LCD1602.ShowNumber(Ziadana, 11, 1)
    basic.pause(500)
})
