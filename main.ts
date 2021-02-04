input.onButtonPressed(Button.A, function () {
    Ziadana = Ziadana + 0.5
})
input.onButtonPressed(Button.B, function () {
    Ziadana = Ziadana - 0.5
})
let Ziadana = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
wuKong.setServoAngel(wuKong.ServoList.S6, 0)
let Merana = 0
Ziadana = 25
basic.forever(function () {
    Merana = input.temperature()
    I2C_LCD1602.ShowString("Merana  T:", 0, 0)
    I2C_LCD1602.ShowString("Ziadana T:", 0, 1)
    I2C_LCD1602.ShowNumber(Merana, 11, 0)
    I2C_LCD1602.ShowNumber(Ziadana, 11, 1)
    basic.pause(500)
    I2C_LCD1602.clear()
})
